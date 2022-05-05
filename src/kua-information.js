
class KuaInformation {
    constructor(wealth, health, relationships, personalGrowth, badLuck, threeKillings, fiveGhosts, totalLoss, group, element) {
        this.lucky = {
            wealth,
            health,
            relationships,
            personalGrowth,
        },
            this.unlucky = {
                badLuck,
                threeKillings,
                fiveGhosts,
                totalLoss,
            },
            this.group = group,
            this.element = element
    }

    // to do: make methods static to save memmory //
    displayLuckyDirections() {
        const containingElement = document.createElement('div');
        containingElement.classList.add('lucky-directions');

        const luckyHeading = document.createElement('h5');
        luckyHeading.textContent = 'LUCKY';

        containingElement.appendChild(luckyHeading);

        const luckyDirectionsEntires = Object.entries(this.lucky);
        for (let [effect, direction] of luckyDirectionsEntires) {

            const headingEffect = document.createElement('h5');
            headingEffect.classList.add('direction-benefit');
            headingEffect.textContent = effect;

            const directionElement = document.createElement('p');
            directionElement.classList.add('direction');
            directionElement.textContent = direction;

            containingElement.appendChild(headingEffect);
            containingElement.appendChild(directionElement);
        }

        return containingElement;
    }

    displayUnluckyDirections() {
        const containingElement = document.createElement('div');
        containingElement.classList.add('unlucky-directions');

        const unluckyHeading = document.createElement('h5');
        unluckyHeading.textContent = 'UNLUCKY';

        containingElement.appendChild(unluckyHeading);

        const unluckyDirectionsEntires = Object.entries(this.unlucky);
        for (let [effect, direction] of unluckyDirectionsEntires) {

            const headingEffect = document.createElement('h5');
            headingEffect.classList.add('direction-benefit');
            headingEffect.textContent = effect;

            const directionElement = document.createElement('p');
            directionElement.classList.add('direction');
            directionElement.textContent = direction;

            containingElement.appendChild(headingEffect);
            containingElement.appendChild(directionElement);
        }

        return containingElement;
    }

    displayGroup() {
        const containingElement = document.createElement('div');
        containingElement.classList.add('group');

        const groupHeadingElement = document.createElement('h5');
        groupHeadingElement.classList.add('group-title');
        groupHeadingElement.textContent = 'Group:';

        const groupParElement = document.createElement('p');
        groupParElement.classList.add('group-content');
        groupParElement.textContent = this.group;

        containingElement.appendChild(groupHeadingElement);
        containingElement.appendChild(groupParElement);

        return containingElement;
    }

    displayElement() {

        const containingElement = document.createElement('div');
        containingElement.classList.add('element');

        const kuaElementHeadingElement = document.createElement('h5');
        kuaElementHeadingElement.classList.add('element-title');
        kuaElementHeadingElement.textContent = 'Element:';

        const kuaElementContentElement = document.createElement('p');
        kuaElementContentElement.classList.add('element-content');
        kuaElementContentElement.textContent = this.element;

        containingElement.appendChild(kuaElementHeadingElement);
        containingElement.appendChild(kuaElementContentElement);

        return containingElement;
    }


}
export const kuaInfo = {
    '1': new KuaInformation('SE', 'E', 'S', 'N', 'W', 'NE', 'NW', 'SW', 'east', 'water'),
    '2': new KuaInformation('NE', 'W', 'NW', 'SW', 'E', 'SE', 'S', 'N', 'west', 'earth'),
    '3': new KuaInformation('S', 'N', 'SE', 'E', 'SW', 'NW', 'NE', 'W', 'east', 'wood'),
    '4': new KuaInformation('N', 'S', 'E', 'SE', 'NW', 'SW', 'W', 'NE', 'east', 'wood'),
    '6': new KuaInformation('W', 'NE', 'SW', 'NW', 'SE', 'E', 'N', 'S', 'west', 'metal'),
    '7': new KuaInformation('NW', 'SW', 'NE', 'W', 'N', 'S', 'SE', 'E', 'west', 'metal'),
    '8': new KuaInformation('SW', 'NW', 'W', 'NE', 'S', 'N', 'E', 'SE', 'west', 'earth'),
    '9': new KuaInformation('E', 'SE', 'N', 'S', 'NE', 'W', 'SW', 'NW', 'east', 'fire'),
}
