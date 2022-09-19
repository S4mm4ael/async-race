export default class WinnersRender {
    template: string;

    constructor() {
        this.template = `
        <div id = "winners" class ="wrapper table__wrapper">
    <div class="garage"> 
        <h2>Winners</h2>
    <div class="pages">
        <h3>Page #</h3>
    </div>
    <div class = "winners_table">
        <table>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Car</th>
                    <th>Name</th>
                    <th class = "th_wrapper" id="wins-sort">Wins <div class = 'table__arrow' id="table-ar1">gg</div></th>
                    <th class = "th_wrapper" id="time-sort">Best Time<div class = 'table__arrow' id="table-ar2">gg</div></th>
                </tr>
            </thead>
            <tbody id = "winners-tbody">
    
            </tbody>
        </table>
    </div>
    <div class="form4">
        <button class="button form-win_prev">Prev</button>
        <button class="button form-win_next">Next</button>
    </div>
</div>
      `;
    }

    render() {
        const main: HTMLElement = document.querySelector('main');
        const winnerTable: HTMLElement = document.createElement('template');
        winnerTable.id = 'winner-table';
        winnerTable.innerHTML = this.template;
        main?.append(winnerTable);
    }
}
