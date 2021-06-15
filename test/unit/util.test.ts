/**
 * @author WMXPY
 * @namespace JWTConfig
 * @description Util
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { convertJSTimeToUnixTime, fixUndefinableDate } from '../../src';

describe('Given [Util] Helper functions', (): void => {

    const chance: Chance.Chance = new Chance('jwt-config-util');

    it('should be able to convert js time to unix time', (): void => {

        const jsTime: number = 1000; // 1 second
        const result: number = convertJSTimeToUnixTime(jsTime);

        expect(result).to.be.equal(1);
    });

    it('should be able to fix undefinable date', (): void => {

        const target: Date = chance.date();
        const fixed: number | undefined = fixUndefinableDate(target);

        expect(fixed).to.be.equal(target);
    });
});
