import { expect } from 'chai';
import { calculateKuaNumber } from '../calculator.js';

describe('claculator functionality tests', () => {

    describe('calculating kua number of men', () => {

        it('should return kua number 1', () => {

            const input = ['11', '04', '1990', 'male'];
            const output = 1;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 2', () => {

            const input = ['11', '04', '1998', 'male'];
            const output = 2;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 3', () => {

            const input = ['11', '03', '2015', 'male'];
            const output = 3;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 4', () => {

            const input = ['11', '03', '1960', 'male'];
            const output = 4;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 6', () => {

            const input = ['11', '03', '1985', 'male'];
            const output = 6;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 7', () => {

            const input = ['11', '03', '1993', 'male'];
            const output = 7;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 8', () => {

            const input = ['11', '03', '1992', 'male'];
            const output = 8;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 9', () => {

            const input = ['11', '03', '1982', 'male'];
            const output = 9;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

    });

    describe('calculating kua numbers for women', () => {

        it('should return kua number 1', () => {

            const input = ['11', '03', '1959', 'female'];
            const output = 1;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 2', () => {

            const input = ['11', '03', '2014', 'female'];
            const output = 2;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 3', () => {

            const input = ['11', '03', '1970', 'female'];
            const output = 3;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 4', () => {

            const input = ['11', '03', '1953', 'female'];
            const output = 4;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 6', () => {

            const input = ['11', '03', '1991', 'female'];
            const output = 6;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 7', () => {

            const input = ['11', '03', '1974', 'female'];
            const output = 7;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 8', () => {

            const input = ['11', '03', '1984', 'female'];
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

});