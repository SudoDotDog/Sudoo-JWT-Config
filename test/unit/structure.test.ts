/**
 * @author WMXPY
 * @namespace JWTConfig
 * @description Structure
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { deconstructJWTOrNull, TokenTuple } from '../../src';

describe('Given [Structure] Helper functions', (): void => {

    const chance: Chance.Chance = new Chance('jwt-config-structure');

    it('should be able to deconstruct JWT', (): void => {

        const header: string = chance.string();
        const body: string = chance.string();
        const signature: string = chance.string();

        const token: string = `${header}.${body}.${signature}`;
        const tuple: TokenTuple | null = deconstructJWTOrNull(token);

        expect(tuple).to.be.deep.equal([
            header,
            body,
            signature,
        ]);
    });

    it('should be able to deconstruct JWT - sad path', (): void => {

        const token: string = chance.string();
        const tuple: TokenTuple | null = deconstructJWTOrNull(token);

        expect(tuple).to.be.equal(null);
    });
});
