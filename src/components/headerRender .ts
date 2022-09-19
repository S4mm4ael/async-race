export default class HeaderRender {
    template: string;

    constructor() {
        this.template = `
        
        <div class="header_wrapper">
            <nav>
                <button class="button button_to-garage">TO GARAGE</button>
                <button class="button button_to-winners">TO WINNERS</button>
            </nav>
        </div>
      `;
    }

    render() {
        const header: HTMLElement = document.createElement('header');
        const main: HTMLElement = document.createElement('main');
        header.innerHTML = this.template;
        document.body?.append(header);
        document.body?.append(main);
    }
}
