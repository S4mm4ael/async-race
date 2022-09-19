import { IData } from './interfaces';
import { deleteCar, startCar, stopCar, changingElement } from './fetch';

export class CarView {
    drawCar(data: IData[]) {
        if (document.querySelector('.race') as HTMLElement) {
            (document.querySelector('.race') as HTMLElement).innerHTML = '';
        }
        const fragment = document.createDocumentFragment() as DocumentFragment;
        const cardItemTemp = document.querySelector('#car-race') as HTMLTemplateElement;
        data.forEach((item) => {
            const cardClone = cardItemTemp.content.cloneNode(true) as HTMLElement;
            (cardClone.querySelector('.car') as HTMLElement).setAttribute('fill', item.color);
            (cardClone.querySelector('.template') as HTMLElement).setAttribute('id', `template${item.id}`);
            (cardClone.querySelector('.button-car_remove') as HTMLElement).setAttribute('id', `${item.id}`);
            (cardClone.querySelector('.button-car_select') as HTMLElement).setAttribute('id', `S-${item.id}`);
            (cardClone.querySelector('.button-car_start') as HTMLElement).setAttribute('id', `Sta-${item.id}`);
            (cardClone.querySelector('.button-car_stop') as HTMLElement).setAttribute('id', `Sto-${item.id}`);
            (cardClone.querySelector('.car') as HTMLElement).setAttribute('id', `Car-${item.id}`);
            cardClone.querySelector('h4').textContent = item.name;
            fragment.append(cardClone);
            document.querySelector('.race').append(fragment);
        });
        const remove: NodeListOf<Element> = document.querySelectorAll('.button-car_remove');
        for (let i = 0; i < remove.length; i += 1) {
            // eslint-disable-next-line no-loop-func
            (remove[i] as HTMLElement).addEventListener('click', () => {
                deleteCar(Number((remove[i] as HTMLElement).id));
                document
                    .querySelector('.race')
                    .removeChild(document.getElementById(`template${(remove[i] as HTMLElement).id}`));
            });
        }
        const select: NodeListOf<Element> = document.querySelectorAll('.button-car_select');
        for (let i = 0; i < select.length; i += 1) {
            // eslint-disable-next-line no-loop-func
            select[i].addEventListener('click', () => {
                (select[i] as HTMLElement).classList.add('button_clicked');
                changingElement(Number((select[i] as HTMLElement).id.split('-')[1]));
                data.forEach((item) => {
                    if (Number((select[i] as HTMLElement).id.split('-')[1]) === item.id) {
                        (document.querySelector('#car-name_update') as HTMLInputElement).value = item.name;
                        (document.getElementById('form2-color') as HTMLInputElement).value = item.color;
                    }
                });
            });
        }
        const start: NodeListOf<Element> = document.querySelectorAll('.button-car_start');
        const stop: NodeListOf<Element> = document.querySelectorAll('.button-car_stop');
        for (let i = 0; i < start.length; i += 1) {
            start[i].addEventListener('click', () => {
                (start[i] as HTMLElement).classList.add('button_clicked');
                (stop[i] as HTMLElement).classList.remove('button_clicked');
                changingElement(Number((start[i] as HTMLElement).id.split('-')[1]));
                startCar();
            });
        }
        for (let i = 0; i < stop.length; i += 1) {
            stop[i].addEventListener('click', () => {
                (stop[i] as HTMLElement).classList.add('button_clicked');
                (start[i] as HTMLElement).classList.remove('button_clicked');
                changingElement(Number((stop[i] as HTMLElement).id.split('-')[1]));
                stopCar();
            });
        }
    }
}

export default CarView;
