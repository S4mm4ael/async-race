import { IData, ICar, IMove } from './interfaces';
import { createWinner } from './winners';

let garage: string;
let engine: string;
let carID: number;
let res: {
    id: number;
    result: number | string;
}[];

garage = 'http://127.0.0.1:3000/garage';
engine = 'http://127.0.0.1:3000/engine';
carID = 0;

export async function getCars(page = 1, limit = 7) {
    const response: Response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
    const responseAll: Response = await fetch(`${garage}`);
    const cars: [{ name: string; color: string; id: number }] = await response.json();
    const carsAll: [{ name: string; color: string; id: number }] = await responseAll.json();
    document.querySelector('h2').innerHTML = `Garage count - ${carsAll.length}`;
    document.querySelector('h3').innerHTML = `Page  ${page}`;
    localStorage.setItem('page', page.toString());
    return cars;
}
export async function getCarsSimple() {
    const response: Response = await fetch(`${garage}`);
    const cars = await response.json();
    return cars;
}
export async function updateCar() {
    // eslint-disable-next-line no-shadow
    const updateCar = carUpdate();
    document.querySelector(`#S-${carID}`).classList.remove('button_clicked');
    const response: Response = await fetch(`${garage}/${carID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateCar),
    });
    if (response.status === 200) {
        return;
    }
    throw new Error(`${response.status}`);
}
export async function createCar(n = 1) {
    const newCar = carCreate();
    let newCarArr: {
        name: string;
        color: string;
    }[];
    if (n === 1) {
        newCarArr.push(newCar);
    } else newCarArr = carsCreate(n);
    for (let i = 0; i < n; i += 1) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
        const response: Response = await fetch(`${garage}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCarArr[i]),
        });
    }
}
export async function deleteCar(id: number) {
    const response: Response = await fetch(`${garage}/${id}`, {
        method: 'DELETE',
    });
    if (response.status === 200) {
        return;
    }
    throw new Error(`${response.status}`);
}
function carCreate(): ICar {
    const carColor = (document.querySelector('#form1-color') as HTMLInputElement).value;
    const carName = (document.querySelector('#car-name_create') as HTMLInputElement).value || 'unknown';
    const newCar: { name: string; color: string } = {
        name: carName,
        color: carColor,
    };
    return newCar;
}
export async function startCar() {
    const response: Response = await fetch(`${engine}?id=${carID}&status=started`, {
        method: 'PATCH',
    });
    const carParams1: { velocity: number; distance: number } = await response.json();
    const carParams: { id: number; velocity: number; distance: number } = {
        id: carID,
        velocity: carParams1.velocity,
        distance: carParams1.distance,
    };
    moving(carParams, true);
    driveMode(carParams);
}

export async function startAllCar() {
    const disable: NodeListOf<Element> = document.querySelectorAll('.button');
    disable.forEach((item) => {
        item.setAttribute('disabled', '');
        item.classList.add('disabled');
    });
    res = [];
    const cars: IData[] = await getCars();

    for (let i = 0; i < cars.length; i += 1) {
        const response: Response = await fetch(`${engine}?id=${cars[i].id}&status=started`, {
            method: 'PATCH',
        });
        const carParams1: { velocity: number; distance: number } = await response.json();
        const carParams: { id: number; velocity: number; distance: number } = {
            id: cars[i].id,
            velocity: carParams1.velocity,
            distance: carParams1.distance,
        };
        moving(carParams, true);
        const rr = await driveMode(carParams);
        res.push(rr);
    }
    const winner: {
        id: number;
        result: string | number;
    } = res.filter((a) => a.result !== 'damaged').sort((a, b) => Number(a.result) - Number(b.result))[0];
    const winnerToTable: {
        id: number;
        result: number;
        color: string;
        name: string;
    } = {
        id: winner.id,
        result: Math.round(Number(winner.result) / 10) / 100,
        color: '',
        name: '',
    };
    for (let i = 0; i < cars.length; i += 1) {
        if (cars[i].id === winner.id) {
            winnerToTable.name = cars[i].name;
            winnerToTable.color = cars[i].color;
            const text = `${cars[i].name} was first! (${Math.round(Number(winner.result) / 10) / 100} s!)`;
            const divText = document.createElement('div');
            divText.classList.add('text-winner');
            const innerText = document.createTextNode(text);
            const innerP = document.createElement('p');
            innerP.append(innerText);
            divText.append(innerP);
            // eslint-disable-next-line no-shadow
            const garage: HTMLElement = document.querySelector('.garage');
            garage.append(divText);
            divText.addEventListener('click', () => {
                garage.removeChild(divText);
            });
        }
    }
    createWinner(winnerToTable);
    disable.forEach((item) => {
        item.removeAttribute('disabled');
        item.classList.remove('disabled');
    });
}
export async function driveMode(params: IMove) {
    const response: Response = await fetch(`${engine}?id=${params.id}&status=drive`, {
        method: 'PATCH',
    });
    try {
        const engineParams: {
            id: number;
            velocity: number;
            distance: number;
        } = await response.json();
        console.log('engineParams', engineParams);
    } catch (err) {
        console.log('500 (Internal Server Error)');
        const carParams = {
            id: params.id,
            velocity: 0,
            distance: 500000,
        };
        moving(carParams, false);
    }
    return response.ok
        ? {
              id: params.id,
              result: params.distance / params.velocity,
          }
        : {
              id: params.id,
              result: 'damaged',
          };
}
export async function stopCar() {
    const response: Response = await fetch(`${engine}?id=${carID}&status=stopped`, {
        method: 'PATCH',
    });
    const carParams1: {
        id: number;
        velocity: number;
        distance: number;
    } = await response.json();
    const carParams: {
        id: number;
        velocity: number;
        distance: number;
    } = {
        id: carID,
        velocity: carParams1.velocity,
        distance: carParams1.distance,
    };
    moving(carParams, true);
}
export async function stopAllCar() {
    const cars = await getCars();
    for (let i = 0; i < cars.length; i += 1) {
        const response: Response = await fetch(`${engine}?id=${cars[i].id}&status=stopped`, {
            method: 'PATCH',
        });
        const carParams1: {
            id: number;
            velocity: number;
            distance: number;
        } = await response.json();
        const carParams: {
            id: number;
            velocity: number;
            distance: number;
        } = {
            id: cars[i].id,
            velocity: carParams1.velocity,
            distance: carParams1.distance,
        };
        moving(carParams, true);
    }
}
function carsCreate(n: number): ICar[] {
    const carArr: ICar[] = [];
    for (let i = 0; i < n; i += 1) {
        const carColor = `#${`${Math.random().toString(16)}000000`.substring(2, 8).toUpperCase()}`;

        const nameArrayFirst: string[] = [
            'Lada',
            'Tesla',
            'Toyota',
            'Peugeot',
            'Seat',
            'BMW',
            'Nissan',
            'Mazda',
            'Citroen',
            'Audi',
            'Skoda',
        ];
        const nameArraySecond: string[] = [
            'Vesta',
            'Supra',
            '626',
            '200SX',
            'Model 3',
            '405',
            'M3',
            'Ibiza',
            'Cresta',
            'Xantia',
            'Largus',
        ];
        const carName = `${nameArrayFirst[Math.floor(Math.random() * nameArrayFirst.length)]} ${
            nameArraySecond[Math.floor(Math.random() * nameArraySecond.length)]
        }`;
        const newCar = {
            name: carName,
            color: carColor,
        };
        carArr.push(newCar);
    }
    return carArr;
}
function carUpdate(): ICar {
    const carColor = (document.querySelector('#form2-color') as HTMLInputElement).value;
    const carName = (document.querySelector('#car-name_update') as HTMLInputElement).value;
    // eslint-disable-next-line no-shadow
    const updateCar = {
        name: carName,
        color: carColor,
    };
    return updateCar;
}
function moving(carParams: IMove, status: boolean) {
    const carToMove = document.getElementById(`Car-${carParams.id}`);
    const car = {
        pos: 0,
        speed: carParams.velocity / 10,
        width: 100,
        update: function () {
            carToMove.style.transform = `translateX(${this.pos}px)`;
        },
    };
    const area: number = window.screen.width;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    let myReq: number = requestAnimationFrame(tick);
    function tick() {
        car.pos += car.speed;
        if (car.pos + car.width * 1.3 > area || !status) {
            car.speed = 0;
        }
        car.update();
        myReq = requestAnimationFrame(tick);
    }
}
export function changingElement(item: number) {
    carID = item;
}
