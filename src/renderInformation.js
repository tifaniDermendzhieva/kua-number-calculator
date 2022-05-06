
import { calculateKuaNumber } from './calculateKuaNumber.js';
import { kuaInfo } from './kua-information.js'

const sectionDisplay = document.getElementById('display');

export function renderInformation(date, gender) {

    const [year, month, day] = date.split('-');
    const kuaNumber = calculateKuaNumber(day, month, year, gender);

    const card = kuaNumberCard(kuaNumber);

    sectionDisplay.replaceChildren(card);

}

export function renderAdditionalInformation(date, gender) {

    const [year, month, day] = date.split('-');
    const kuaNumber = calculateKuaNumber(day, month, year, gender);

    const card = kuaNumberCard(kuaNumber);
    sectionDisplay.appendChild(card);
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

    const luckyDirectionsDiv = kuaInfo[kuaNumber].displayLuckyDirections();
    const unluckyDirectionsDiv = kuaInfo[kuaNumber].displayUnluckyDirections();
    const groupDiv = kuaInfo[kuaNumber].displayGroup();
    const elementDiv = kuaInfo[kuaNumber].displayElement();

    cardElement.appendChild(headingElement);

    directionsContainerElement.appendChild(luckyDirectionsDiv);
    directionsContainerElement.appendChild(unluckyDirectionsDiv);

    cardElement.appendChild(directionsContainerElement);
    cardElement.appendChild(groupDiv);
    cardElement.appendChild(elementDiv);


    return cardElement;
}