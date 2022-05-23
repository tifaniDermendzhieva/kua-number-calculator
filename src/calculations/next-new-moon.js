
const synodicCycle = 29.53058770676;
const referenceNewMoon = new Date(Date.UTC(1920, 2, 20, 10, 55)); // ! NB: months start from index 0
const msPerDay = 86400000;

export function nextNewMoon(day, month, year) {

    const monthNumber = Number(month) - 1; // ! adjust index to be used in new Date
    const yearNumber = Number(year);
    const dayNumber = Number(day);
    const selectedDate = new Date(yearNumber, monthNumber, dayNumber);

    const elapsedTime = selectedDate.getTime() - referenceNewMoon.getTime(); //time in ms
    const elapsedDays = elapsedTime / msPerDay;
    const remainingDaysToNewMoon = synodicCycle - (elapsedDays % synodicCycle); // days remaining
    const remainingMStoNewMoon = remainingDaysToNewMoon * msPerDay; // ms remaining

    const newDateMiliSec = selectedDate.getTime() + remainingMStoNewMoon;
    const newMoon = new Date(newDateMiliSec);

    const nextNewMoonDay = newMoon.getDate();
    const nextNewMoonMonth = newMoon.getMonth() + 1;


    return [nextNewMoonDay, nextNewMoonMonth];
}