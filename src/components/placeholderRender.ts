export default class PlaceholderRender {
    template: string;

    constructor() {
        this.template = `
        
      `;
    }

    render() {
        const main: HTMLElement = document.querySelector('main');
        const placeholder: HTMLElement = document.createElement('div');
        placeholder.id = 'placeholder';
        placeholder.innerHTML = this.template;
        main?.append(placeholder);
    }
}
