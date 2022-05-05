import { beforeMssg, checkChineseNewYear } from "./checkChineseNewYear.js";
export function calculateKuaNumber(day, month, year, gender) {

    // for people born between 21.01 and 21.02 check if the Chinese New Year is before or after their birthdate //
    if (month == '1' && Number(day) >= 21 || month == '2' && Number(day) <= 21) {
        const chineseNewYear = checkChineseNewYear(day, month, year); // expected to return string
        if (chineseNewYear === beforeMssg) {
            year = Number(year) - 1;
        }
    }

    let temp = year.toString().split('').map(digit => Number(digit))
    let kua = 0;

    while (temp.length != 1) {

        kua = 0;

        for (let i = 0; i < temp.length; i++) {
            kua += temp[i];
        }

        temp = kua.toString().split('').map(digit => Number(digit));
    }


    switch (gender) {
        case 'female':
            kua = kua + 4;          // largest possible kua at this stage 9 + 4 =13 => two digits max
            if (kua > 9) {
                let temp = kua.toString().split('').map(d => Number(d));
                kua = temp[0] + temp[1];
            }
            if (kua === 5) {
                kua = 8;
            }
            break;

        case 'male':
            kua = 11 - kua;
            if (kua === 10) { kua = 1; }
            else if (kua === 5) {
                kua = 2;
            }
            break;
    }

    return kua;
}