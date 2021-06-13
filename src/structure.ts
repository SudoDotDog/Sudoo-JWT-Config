/**
 * @author WMXPY
 * @namespace JWTConfig
 * @description Structure
 */

import { TokenTuple } from "./declare";

export const deconstructJWTOrNull = (token: string): TokenTuple | null => {

    const tuple: TokenTuple = token.split('.') as any;

    if (tuple.length !== 3) {
        return null;
    }
    return tuple;
};

export const deconstructJWTOrThrow = (token: string, error?: Error): TokenTuple => {

    const tuple: TokenTuple = token.split('.') as any;

    if (tuple.length !== 3) {

        if (error) {
            throw error;
        }
        throw new Error("[Sudoo-JWT-Config] Invalid Token");
    }
    return tuple;
};

export const deconstructJWTEnsure = (token: string): TokenTuple => {

    const tuple: TokenTuple = token.split('.') as TokenTuple;
    return tuple;
};

export const verifyTokenPatternByTuple = (tuple: TokenTuple): boolean => {

    if (tuple.length !== 3) {
        return false;
    }
    return true;
};
