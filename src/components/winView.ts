import { IWinners, IData } from './interfaces';
import { getWinners } from './winners';
import { getCarsSimple } from './fetch';

export class WinView {
    page = Number(localStorage.winPage) || 1;

    drawTab(wins: IWinners[], cars: IData[]) {
        try {
            const tBody = document.querySelector('#winners-tbody') as HTMLElement;
            tBody.innerHTML = '';
            const newCarArr = [];
            for (let j = 0; j < wins.length; j += 1) {
                for (let i = 0; i < cars.length; i += 1) {
                    if (wins[j].id === cars[i].id)
                        newCarArr.push({
                            id: wins[j].id,
                            wins: wins[j].wins,
                            time: wins[j].time,
                            color: cars[i].color,
                            name: cars[i].name,
                        });
                }
            }
            newCarArr.forEach((item) => {
                const tr: HTMLTableRowElement = document.createElement('tr');
                const td1: HTMLTableCellElement = document.createElement('td');
                const text1: Text = document.createTextNode(String(item.id));
                td1.append(text1);
                const td3: HTMLTableCellElement = document.createElement('td');
                const fragment3: DocumentFragment = document.createDocumentFragment();
                const carTemp: HTMLTemplateElement = document.querySelector('#carTesla');
                const carClone = carTemp.content.cloneNode(true) as HTMLElement;
                fragment3.append(carClone);
                td3.append(fragment3);
                (td3.querySelector('.carTesla') as HTMLElement).setAttribute('fill', item.color);
                const td4: HTMLTableCellElement = document.createElement('td');
                const text4: Text = document.createTextNode(item.name);
                td4.append(text4);
                const td5: HTMLTableCellElement = document.createElement('td');
                const text5: Text = document.createTextNode(String(item.wins));
                td5.append(text5);
                const td6: HTMLTableCellElement = document.createElement('td');
                const text6: Text = document.createTextNode(String(item.time));
                td6.append(text6);
                tr.append(td1);
                tr.append(td3);
                tr.append(td4);
                tr.append(td5);
                tr.append(td6);
                tBody.append(tr);
            });
        } catch (e) {
            console.log('Wait for a page load to complete!');
        }
    }

    eventButton() {
        const buttonWinPrev: HTMLElement = document.querySelector('.form-win_prev');
        buttonWinPrev.addEventListener('click', () => {
            this.page -= 1;
            if (this.page < 1) this.page = 1;
            else {
                this.drawPage();
            }
        });
        const buttonWinNext: HTMLElement = document.querySelector('.form-win_next');
        buttonWinNext.addEventListener('click', () => {
            this.page += 1;
            this.drawPage();
        });
        const winSort = document.querySelector('#wins-sort') as HTMLElement;
        const timeSort = document.querySelector('#time-sort') as HTMLElement;
        winSort.querySelector('#table-ar1').addEventListener('click', (e: Event) => {
            e.stopPropagation();
            winSort.querySelector('#table-ar1').classList.toggle('table__arrow_down');
            let dir = 'ASD';
            if (winSort.querySelector('#table-ar1').className === 'table__arrow table__arrow_down') {
                dir = 'DESC';
            }
            this.drawPage('wins', dir);
        });
        timeSort.querySelector('#table-ar2').addEventListener('click', (e: Event) => {
            e.stopPropagation();
            timeSort.querySelector('#table-ar2').classList.toggle('table__arrow_down');
            let dir = 'ASD';
            if (timeSort.querySelector('#table-ar2').className === 'table__arrow table__arrow_down') {
                dir = 'DESC';
            }
            this.drawPage('time', dir);
        });
    }

    drawPage(sort?: string, dir?: string) {
        (async () => {
            this.drawTab(await getWinners(this.page, 10, sort || 'time', dir || 'ASD'), await getCarsSimple());
        })();
    }
}

export default WinView;
