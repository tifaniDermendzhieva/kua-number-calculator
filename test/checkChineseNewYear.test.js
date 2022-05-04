import { expect } from 'chai';
import { nextNewMoon } from '../checkChineseNewYear.js';

describe('calculating the next new moon', () => {

    describe('calculating next new moon after 1970', () => {

        it('should return 23 Feb 2001', () => {

            let input = [30, 1, 2001];
            let output = [23, 2];

            expect(nextNewMoon(...input)).to.eql(output);

        });

        it('should return 31 May 2003', () => {

            let input = [12, 5, 2003];
            let output = [31, 5];

            expect(nextNewMoon(...input)).to.eql(output);

        });

        it('should return 17 Feb  2007', () => {

            let input = [30, 1, 2007];
            let output = [17, 2];

            expect(nextNewMoon(...input)).to.eql(output);

        });
        it('should return 16 Feb 1999', () => {

            let input = [25, 1, 1999];
            let output = [16, 2];

            expect(nextNewMoon(...input)).to.eql(output);

        });

        it('should return 6 Feb 1970', () => {

            let input = [28, 1, 1970];
            let output = [6, 2];

            expect(nextNewMoon(...input)).to.eql(output);

        });

    });



    describe('calculating next new moon before 1970', () => {
        it('should return 15 Feb 1961', () => {

            let input = [27, 1, 1961];
            let output = [15, 2];

            expect(nextNewMoon(...input)).to.eql(output);

        });

    });

});

describe('calculation date of Chinese New Year', () => {
    //to do: ...
});