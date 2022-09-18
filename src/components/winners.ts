/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable node/no-missing-import */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable node/no-unsupported-features/es-syntax */
import { IWinners, IWinnersShared } from './interfaces';
import {} from './carView';

const winners = 'http://127.0.0.1:3000/winners';
let res = [
    {
        id: 0,
        wins: 0,
        time: 0,
    },
];
class Winners {
    winner: IWinnersShared;

    wins: number;

    constructor(winner: IWinnersShared) {
        this.winner = winner;
        this.wins = 1;
    }

    makeIWinner() {
        for (let i = 0; i < res.length; i += 1) {
            if (res[i].id === this.winner.id) {
                res[i].wins += 1;
                this.wins = res[i].wins;
            }
        }
        return {
            id: this.winner.id,
            wins: this.wins,
            time: this.winner.result,
        };
    }
}

export async function getWinners(page = 1, limit = 10, sort = 'time', order = 'ASD') {
    const response = await fetch(`${winners}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
    const responseAll = await fetch(`${winners}`);
    const win = await response.json();
    const winAll = await responseAll.json();
    document.querySelector('h2').innerHTML = `WinnerS  ${winAll.length}`;
    document.querySelector('h3').innerHTML = `PagE  ${page}`;
    localStorage.setItem('pageWin', page.toString());
    return win;
}
export async function updateWinner(winnerToTable: IWinnersShared) {
    const upWin = new Winners(winnerToTable);
    const response = await fetch(`${winners}/${winnerToTable.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(upWin.makeIWinner()),
    });
    if (response.status === 200) {
        return;
    }
    throw new Error(`${response.status}`);
}
export async function createWinner(winnerToTable: IWinnersShared) {
    const win = await getWinners();
    if (win.some((v: IWinners) => v.id === winnerToTable.id)) {
        updateWinner(winnerToTable);
    } else {
        res = [
            ...win,
            {
                id: winnerToTable.id,
                wins: 0,
                time: winnerToTable.result,
            },
        ];
        const newWin = new Winners(winnerToTable);
        const response = await fetch(`${winners}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newWin.makeIWinner()),
        });
        if (response.status === 404) {
            throw new Error(`${response.status}`);
        }
    }
}
export async function deleteWinner(id: number) {
    // eslint-disable-next-line no-unused-vars
    const wins = await getWinners();
    // eslint-disable-next-line no-unused-vars
    const response = await fetch(`${winners}/${id}`, {
        method: 'DELETE',
    });
}
