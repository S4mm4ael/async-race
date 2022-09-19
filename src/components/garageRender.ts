export default class GarageRender {
    template: string;

    constructor() {
        this.template = `
        <div class="wrapper__main wrapper">
    <div class="form">
                <div class="form1">
                    <input id="car-name_create" class="form_input" type="text" name="text" placeholder=" " value="">
                    <input type="color" class="form_color" id="form1-color" name="color" value="#d0fafd">
                    <button class="button create_button">CREATE</button>
                </div>
                <div class="form2">
                    <input id="car-name_update" class="form_input" type="text" name="text" placeholder=" "
                        value="">
                    <input type="color" class="form_color" id="form2-color" name="color"
                        value="#e66465">
                    <button class="button update_button">UPDATE</button>
                </div>
                <div class="form3">
                    <button class="button form_button-race">RACE</button>
                    <button class="button form_button-reset">RESET</button>
                    <button class="button form_button-generate">GENERATE</button>
                </div>
    </div>
                <div class="garage">
                    <h2>Garage</h2>
                <div class="pages">
                    <h3>Page #</h3>
                </div>
                <div class="race"></div>
                <div class="form4">
                    <button class="button form_prev">PREV</button>
                    <button class="button form_next">NEXT</button>
                </div>
      `;
    }

    render() {
        const main: HTMLElement = document.querySelector('main');
        const garage: HTMLElement = document.createElement('template');
        garage.id = 'controller';
        garage.innerHTML = this.template;
        main?.append(garage);
    }
}
