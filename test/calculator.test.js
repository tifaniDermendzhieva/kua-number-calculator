import { expect } from 'chai';
import { calculateKuaNumber } from '../calculator.js';

describe('claculator functionality tests', () => {

    describe('calculating kua number of men', () => {

        it('should return kua number 1', () => {

            const input = ['11.03.1990', 'male'];
            const output = 1;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 2', () => {

            const input = ['11.04.1998', 'male'];
            const output = 2;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 3', () => {

            const input = ['11.04.2015', 'male'];
            const output = 3;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 4', () => {

            const input = ['11.04.1960', 'male'];
            const output = 4;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 6', () => {

            const input = ['11.04.1985', 'male'];
            const output = 6;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 7', () => {

            const input = ['11.04.1993', 'male'];
            const output = 7;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 8', () => {

            const input = ['11.04.1992', 'male'];
            const output = 8;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

        it('should return kua number 9', () => {

            const input = ['11.04.1982', 'male'];
            const output = 9;

            expect(calculateKuaNumber(...input)).to.equal(output);
        });

    });


});