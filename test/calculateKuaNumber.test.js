import { expect } from 'chai';
import { calculateKuaNumber } from '../src/calculate-kua-number.js';


describe('calculator functionality tests', () => {

    describe('calculating kua number of men', () => {

        it('should return kua number 1', () => {

            const input = ['11', '4', '1990', 'male'];
            const output = 1;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 2', () => {

            const input = ['11', '4', '1998', 'male'];
            const output = 2;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 3', () => {

            const input = ['11', '3', '2015', 'male'];
            const output = 3;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 4', () => {

            const input = ['11', '3', '1960', 'male'];
            const output = 4;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 6', () => {

            const input = ['11', '3', '1985', 'male'];
            const output = 6;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 7', () => {

            const input = ['11', '3', '1993', 'male'];
            const output = 7;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 8', () => {

            const input = ['11', '3', '1992', 'male'];
            const output = 8;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 9', () => {

            const input = ['11', '3', '1982', 'male'];
            const output = 9;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

    });

    describe('calculating kua numbers for women', () => {

        it('should return kua number 1', () => {

            const input = ['11', '3', '1959', 'female'];
            const output = 1;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 2', () => {

            const input = ['11', '3', '2014', 'female'];
            const output = 2;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 3', () => {

            const input = ['11', '3', '1970', 'female'];
            const output = 3;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 4', () => {

            const input = ['11', '3', '1953', 'female'];
            const output = 4;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 6', () => {

            const input = ['11', '3', '1991', 'female'];
            const output = 6;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 7', () => {

            const input = ['11', '3', '1974', 'female'];
            const output = 7;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 8', () => {

            const input = ['11', '3', '1984', 'female'];
            const output = 8;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

    });

    describe('calculating kua number when the sum of digits (in year of birth) equals 5', () => {

        it('should return kua number 8 if gender is female', () => {

            const input = ['11', '03', '1981', 'female'];
            const output = 8;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 2 if gender is male', () => {

            const input = ['11', '03', '1932', 'male'];
            const output = 2;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

    });

    describe('calculating kua numbers of people born in the period 21.01 - 21.02', () => {
        describe('cases when the birthday was before Chinese New Year - adjustment of birth-year required', () => {

            it('should return kua number 8', () => {

                const input = ['23', '1', '1982', 'female'];
                const output = 8;

                expect(calculateKuaNumber(...input)).to.equal(output);
            });
            it('should return kua number 4', () => {

                const input = ['6', '2', '1997', 'male'];
                const output = 4;

                expect(calculateKuaNumber(...input)).to.equal(output);
            });

            it('should return kua number 8', () => {

                const input = ['30', '1', '1976', 'female'];
                const output = 8;

                expect(calculateKuaNumber(...input)).to.equal(output);
            });

        });

        describe('cases when the birthday was after Chinese New Year - no adjustment of birth-year required', () => {

            it('should return kua number 6', () => {

                const input = ['25', '1', '1982', 'female'];
                const output = 6;

                expect(calculateKuaNumber(...input)).to.equal(output);
            });

            it('should return kua number 3', () => {

                const input = ['9', '2', '1997', 'male'];
                const output = 3;

                expect(calculateKuaNumber(...input)).to.equal(output);
            });

            it('should return kua number 9', () => {

                const input = ['31', '1', '1976', 'female'];
                const output = 9;

                expect(calculateKuaNumber(...input)).to.equal(output);
            });
        });

    });

});