/**
 * @author WMXPY
 * @namespace JWTConfig
 * @description Structure
 */

import { TokenTuple } from "./declare";

export const deconstructJWT = (token: string): TokenTuple => {

    const tuple: TokenTuple = token.split('.') as TokenTuple;

    return tuple;
};

export const verifyTokenPatternByTuple = (tuple: TokenTuple): boolean => {

    if (tuple.length !== 3) {
        return false;
    }
    return true;
};
