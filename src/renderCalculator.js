
import { renderAdditionalInformation, renderInformation } from './renderInformation.js';

const sectionCalculator = document.getElementById('calculator');
export function renderCalculator() {

    const h3Element = document.createElement('h3');
    h3Element.textContent = 'Calculate your Kua number here';

    const form = document.createElement('form');
    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Enter your birthday';

    const dateElement = document.createElement('input');
    dateElement.setAttribute('type', 'date');
    dateElement.setAttribute('name', 'birthday');

    const divElement = document.createElement('div');

    const keepOnScreenLabel = document.createElement('label');
    keepOnScreenLabel.setAttribute('for', 'keepOnScreen');
    keepOnScreenLabel.textContent = 'Compare with next kua number';

    const keepOnScreenElement = document.createElement('input');
    keepOnScreenElement.setAttribute('type', 'checkbox');
    keepOnScreenElement.setAttribute('name', 'keepOnScreen');

    divElement.appendChild(keepOnScreenLabel);
    divElement.appendChild(keepOnScreenElement);


    const calculateBtn = document.createElement('button');
    calculateBtn.textContent = 'Calculate';

    calculateBtn.addEventListener('click', submitForm);

    form.appendChild(dateLabel);
    form.appendChild(dateElement);

    form.appendChild(divElement);
    form.appendChild(calculateBtn);

    sectionCalculator.appendChild(h3Element);
    sectionCalculator.appendChild(form);

}


function extractData(form) {
    const formData = new FormData(form);
    let data = {};

    const dataEntries = formData.entries();
    for (let [key, value] of dataEntries) {
        data[key] = value;
    }

    return data;
}

function submitForm(e) {
    e.preventDefault();
    const form = document.querySelector('form');
    const data = extractData(form);
    if (data.keepOnScreen) {
        renderAdditionalInformation(data.birthday);
    } else {
        renderInformation(data.birthday);
    }
}