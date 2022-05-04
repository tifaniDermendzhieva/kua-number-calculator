
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
}
const kuaInfo = {
    '1': new KuaNumber('SE', 'E', 'S', 'N', 'W', 'NE', 'NW', 'SW', 'east', 'water'),
    '2': new KuaNumber('NE', 'W', 'NW', 'SW', 'E', 'SE', 'S', 'N', 'west', 'earth'),
    '3': new KuaNumber('S', 'N', 'SE', 'E', 'SW', 'NW', 'NE', 'W', 'east', 'wood'),
    '4': new KuaNumber('N', 'S', 'E', 'SE', 'NW', 'SW', 'W', 'NE', 'east', 'wood'),
    '6': new KuaNumber('W', 'NE', 'SW', 'NW', 'SE', 'E', 'N', 'S', 'west', 'metal'),
    '7': new KuaNumber('NW', 'SW', 'NE', 'W', 'N', 'S', 'SE', 'E', 'west', 'metal'),
    '8': new KuaNumber('SW', 'NW', 'W', 'NE', 'S', 'N', 'E', 'SE', 'west', 'earth'),
    '9': new KuaNumber('E', 'SE', 'N', 'S', 'NE', 'W', 'SW', 'NW', 'east', 'fire'),
}
