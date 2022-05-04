
export function nextNewMoon(day, month, year) {

    const synodicCycle = 29.53058770676;
    const referenceNewMoon = new Date(1920, 2, 20, 12, 55); // ! NB: months start from index 0
    const msPerDay = 86400000;

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



    // console.log(newMoon, nextNewMoonDay, nextNewMoonMonth);
    return [nextNewMoonDay, nextNewMoonMonth];
}


// export function checkChineseNewYear(year) {
//     const newYear2022 = [1, 2]; // 1 Feb 2022 - starting point for calculations 
//     const daysInYear = 365;
//     if (isLeap) {
//         daysInYear++;
//     }

//     const lunarMonth = 29.5; //approx. might accumulate calculation error
//     const lunarYear = 12 * 29.5; // typically a lunar year contains 12 months
//     /// However, New Year must always begin on a New Moon && it must be in the period 21.01 - 21.02 //

//     let nextNewYearDate = [];
//     for (let i = 2022; i <= Number(year); i++) {


//     }

//     return [date, month]
// }


