

import { calculateKuaNumber } from './calculate-kua-number.js';
import { KuaInformation, kuaInfo } from './kua-information.js';

const sectionDisplay = document.getElementById('display');

export function renderInformation(date, gender, keepOnScreen) {

    const [year, month, day] = date.split('-');
    const kuaNumber = calculateKuaNumber(day, month, year, gender); //returns a number

    const card = kuaNumberCard(kuaNumber);

    keepOnScreen !== 'on' ? sectionDisplay.replaceChildren(card) : sectionDisplay.appendChild(card);

}


function kuaNumberCard(kuaNumber) {

    const cardElement = document.createElement('article');
    cardElement.classList.add('kua-card');

    const headingElement = document.createElement('h3');
    headingElement.classList.add('kua-number');
    headingElement.textContent = 'Kua Number: ' + kuaNumber;

    const spanElement = document.createElement('span');
    spanElement.classList.add('delete');

    const deleteAnchor = document.createElement('a');
    deleteAnchor.textContent = 'X';
    deleteAnchor.addEventListener('click', (e) => {
        sectionDisplay.removeChild(cardElement);
    })

    spanElement.appendChild(deleteAnchor);

    headingElement.appendChild(spanElement);

    const directionsContainerElement = document.createElement('div');
    directionsContainerElement.classList.add('directions');

    const luckyDirectionsDiv = KuaInformation.displayLuckyDirections(kuaInfo[kuaNumber]);
    const unluckyDirectionsDiv = KuaInformation.displayUnluckyDirections(kuaInfo[kuaNumber]);
    const groupDiv = KuaInformation.displayGroup(kuaInfo[kuaNumber]);
    const elementDiv = KuaInformation.displayElement(kuaInfo[kuaNumber]);

    cardElement.appendChild(headingElement);

    directionsContainerElement.appendChild(luckyDirectionsDiv);
    directionsContainerElement.appendChild(unluckyDirectionsDiv);

    cardElement.appendChild(directionsContainerElement);
    cardElement.appendChild(groupDiv);
    cardElement.appendChild(elementDiv);

    return cardElement;
}
