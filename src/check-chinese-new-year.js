import { nextNewMoon } from './next-new-moon.js';

export const beforeMssg = 'Your birthday was before Chinese New Year';
const afterMssg = 'Your birthday was after Chinese New Year';

export function checkChineseNewYear(day, month, year) {
    // Chinese New Year must always begin on a New Moon && it must be in the period 21.01 - 21.02 //
    const testDate = [20, 1, Number(year)];
    const chineseNewYear = nextNewMoon(...testDate);

    const yourBirthDay = Number(day);
    const yourBirthMonth = Number(month);

    const chineseNewYearDay = Number(chineseNewYear[0]);
    const chineseNewYearMonth = Number(chineseNewYear[1]);

    if ((yourBirthMonth < chineseNewYearMonth)
        || (yourBirthMonth === chineseNewYearMonth && yourBirthDay < chineseNewYearDay)) {
        return beforeMssg;
    } else {
        return afterMssg;
    }
}

