
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


    return [nextNewMoonDay, nextNewMoonMonth];
}


export function checkChineseNewYear(day, month, year) {
    // Chinese New Year must always begin on a New Moon && it must be in the period 21.01 - 21.02 //
    const testDate = [20, 1, Number(year)];
    const chineseNewYear = nextNewMoon(...testDate);

    const yourBirthDay = Number(day);
    const yourBirthMonth = Number(month);

    const chineseNewYearDay = Number(chineseNewYear[0]);
    const chineseNewYearMonth = Number(chineseNewYear[1]);

    if ((yourBirthMonth < chineseNewYearMonth)
        || (yourBirthMonth == chineseNewYearMonth && yourBirthDay < chineseNewYearDay)) {
        return 'Your birthday was before Chinese New Year';
    } else {
        return 'Your birthday was after Chinese New Year';
    }
}


