import { CarView } from './carView';
import { WinView } from './winView';
import { getCars, createCar, updateCar, startAllCar, stopAllCar, getCarsSimple } from './fetch';
import { getWinners } from './winners';
import HeaderRender from './headerRender ';
import WinnersRender from './winnersRender';
import GarageRender from './garageRender';
import PlaceholderRender from './placeholderRender';
import RaceRender from './raceRender';
import CarRender from './carRender';
import FooterRender from './footerRender';

class Start {
    private view;

    private winView;

    private header;

    private placeholder;

    private winners;

    private garage;

    private race;

    private car;

    private footer;

    constructor() {
        this.view = new CarView();
        this.winView = new WinView();
        this.header = new HeaderRender();
        this.placeholder = new PlaceholderRender();
        this.winners = new WinnersRender();
        this.garage = new GarageRender();
        this.race = new RaceRender();
        this.car = new CarRender();
        this.footer = new FooterRender();
    }

    page: number = Number(localStorage.page) || 1;

    start(): void {
        this.initialView();

        const toWinners: HTMLElement = document.querySelector('.button_to-winners');
        toWinners.addEventListener('click', () => {
            document.querySelector('#placeholder').innerHTML = '';
            const fragment2 = document.createDocumentFragment() as DocumentFragment;
            const winnersTemp = document.querySelector('#winner-table') as HTMLTemplateElement;
            const winnersClone = winnersTemp.content.cloneNode(true) as HTMLElement;
            fragment2.append(winnersClone);
            document.querySelector('#placeholder').append(fragment2);
            (async () => {
                if (localStorage.pageWin) {
                    this.winView.drawTab(await getWinners(Number(localStorage.pageWin)), await getCarsSimple());
                    this.winView.eventButton();
                } else {
                    this.winView.drawTab(await getWinners(), await getCarsSimple());
                    this.winView.eventButton();
                }
            })();
        });
        const toGarage: HTMLElement = document.querySelector('.button_to-garage');
        toGarage.addEventListener('click', () => {
            document.querySelector('#placeholder').innerHTML = '';
            this.start();
        });

        const buttonCreate: HTMLElement = document.querySelector('.create_button');
        buttonCreate.addEventListener('click', () => {
            (async () => {
                await createCar();
                if (localStorage.page) {
                    this.view.drawCar(await getCars(Number(localStorage.page), 7));
                } else {
                    this.view.drawCar(await getCars());
                }
            })();
        });
        const buttonGenerate: HTMLElement = document.querySelector('.form_button-generate');
        buttonGenerate.addEventListener('click', () => {
            (async () => {
                await createCar(100);
                if (localStorage.page) {
                    this.view.drawCar(await getCars(Number(localStorage.page), 7));
                } else {
                    this.view.drawCar(await getCars());
                }
            })();
        });
        const buttonUpdate: HTMLElement = document.querySelector('.update_button');
        buttonUpdate.addEventListener('click', () => {
            (async () => {
                await updateCar();
                if (localStorage.page) {
                    this.view.drawCar(await getCars(Number(localStorage.page), 7));
                } else {
                    this.view.drawCar(await getCars());
                }
            })();
        });
        const buttonPrev: HTMLElement = document.querySelector('.form_prev');
        buttonPrev.addEventListener('click', () => {
            this.page -= 1;
            if (this.page < 1) this.page = 1;
            else {
                (async () => {
                    this.view.drawCar(await getCars(this.page));
                })();
            }
        });
        const buttonNext: HTMLElement = document.querySelector('.form_next');
        buttonNext.addEventListener('click', () => {
            this.page += 1;
            (async () => {
                this.view.drawCar(await getCars(this.page));
            })();
        });
        const buttonRace = document.querySelector('.form_button-race');
        const buttonReset = document.querySelector('.form_button-reset');
        buttonRace.addEventListener('click', () => {
            buttonRace.classList.add('button_clicked');
            buttonReset.classList.remove('button_clicked');
            (async function fu() {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
                const result = await startAllCar();
            })();
        });
        buttonReset.addEventListener('click', () => {
            buttonReset.classList.add('button_clicked');
            buttonRace.classList.remove('button_clicked');
            stopAllCar();
        });
    }

    initialView() {
        localStorage.clear();
        this.header.render();
        this.placeholder.render();
        this.garage.render();
        this.winners.render();
        this.race.render();
        this.car.render();
        this.footer.render();
        const fragment = document.createDocumentFragment() as DocumentFragment;
        const controllerTemp = document.querySelector('#controller') as HTMLTemplateElement;
        const controllerClone = controllerTemp.content.cloneNode(true) as HTMLElement;

        fragment.append(controllerClone);
        document.querySelector('#placeholder').append(fragment);
        (async () => {
            if (localStorage.page) {
                this.view.drawCar(await getCars(Number(localStorage.page), 7));
            } else {
                this.view.drawCar(await getCars());
            }
        })();
    }
}
export default Start;
