/**
 * @author WMXPY
 * @namespace JWTConfig
 * @description Structure
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';

describe('Given [Structure] Helper functions', (): void => {

    const chance: Chance.Chance = new Chance('jwt-config-structure');

    it('placeholder', (): void => {

        expect(chance.string()).to.be.not.equal(chance.string());
    });
});
