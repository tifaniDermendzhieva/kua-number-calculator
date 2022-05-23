import { expect } from 'chai';
import { checkChineseNewYear } from '../src/check-chinese-new-year.js';
import { nextNewMoon } from '../src/next-new-moon.js';

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
        // it('should return 15 Feb 1961', () => {

        //     let input = [27, 1, 1961];
        //     let output = [15, 2];

        //     expect(nextNewMoon(...input)).to.eql(output);

        // });

    });

});

describe('calculating date of Chinese New Year and determining whether the input birthdate was before or after CNY', () => {

    describe('should return false', () => {
        const output = false;
        describe('input years before 1970', () => {

            it('when input birthday is 12 Feb 1953', () => {
                const input = [12, 2, 1953];
                expect(checkChineseNewYear(...input)).to.equal(output);

            });

            it('when input birthday is 27 Jan 1961', () => {
                const input = [27, 1, 1961];
                expect(checkChineseNewYear(...input)).to.equal(output);

            });
        });

        describe('input years after 1970', () => {

            it('when input birthday is 5 Feb 1970', () => {
                const input = [5, 2, 1970];
                expect(checkChineseNewYear(...input)).to.equal(output);

            });

            it('when input birthday is 27 Jan 1979', () => {
                const input = [27, 1, 1979];
                expect(checkChineseNewYear(...input)).to.equal(output);

            });

            it('when input birthday is 23 Jan 1982', () => {
                const input = [23, 1, 1982];
                expect(checkChineseNewYear(...input)).to.equal(output);

            });

            it('when input birthday is 22 Jan 2022', () => {
                const input = [22, 1, 2022];
                expect(checkChineseNewYear(...input)).to.equal(output);

            });
        });

    })

    describe('should return true', () => {

        const output = true;

        describe('input years before 1970', () => {
            it('when input birthday is 13 Feb 1953', () => {
                const input = [13, 2, 1953];
                expect(checkChineseNewYear(...input)).to.equal(output);
            });

            it('when input birthday is 16 Feb 1961', () => {
                const input = [16, 1, 1961];
                expect(checkChineseNewYear(...input)).to.equal(output);

            });

        });

        describe('input years after 1970', () => {
            it('when input birthday is 7 Feb 1970', () => {
                const input = [7, 2, 1970];
                expect(checkChineseNewYear(...input)).to.equal(output);

            });

            it('when input birthday is 29 Jan 1979', () => {
                const input = [29, 1, 1979];
                expect(checkChineseNewYear(...input)).to.equal(output);

            });

            it('when input birthday is 25 Jan 1982', () => {
                const input = [25, 1, 1982];
                expect(checkChineseNewYear(...input)).to.equal(output);

            });

            it('when input birthday is 8 Feb 2022', () => {
                const input = [8, 2, 2022];
                expect(checkChineseNewYear(...input)).to.equal(output);
            });
        });


    })

});