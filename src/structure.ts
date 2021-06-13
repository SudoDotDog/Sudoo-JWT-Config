/**
 * @author WMXPY
 * @namespace JWTConfig
 * @description Structure
 */

import { TokenContentStructure, TokenContentTuple, TokenStructure, TokenTuple } from "./declare";

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

export const structureJWTByTuple = (tuple: TokenTuple): TokenStructure => {


    const serializedHeader: string = tuple[0];
    const serializedBody: string = tuple[1];
    const signature: string = tuple[2];

    return {
        header: serializedHeader,
        body: serializedBody,
        signature,
    };
};

export const structureContentByContentTuple = (tuple: TokenContentTuple): TokenContentStructure => {


    const serializedHeader: string = tuple[0];
    const serializedBody: string = tuple[1];

    return {
        header: serializedHeader,
        body: serializedBody,
    };
};

export const formatEncryptedContentByStructure = (structure: TokenStructure): string => {

    return [
        structure.header,
        structure.body,
    ].join('.');
};

export const formatEncryptedContentByContentStructure = (structure: TokenContentStructure): string => {

    return [
        structure.header,
        structure.body,
    ].join('.');
};

export const formatTokenByStructure = (structure: TokenStructure): string => {

    return [
        structure.header,
        structure.body,
        structure.signature,
    ].join('.');
};

export const formatEncryptedContentByTuple = (tuple: TokenTuple): string => {

    const structure: TokenStructure = structureJWTByTuple(tuple);
    return formatEncryptedContentByStructure(structure);
};

export const formatEncryptedContentByContentTuple = (tuple: TokenContentTuple): string => {

    const structure: TokenContentStructure = structureContentByContentTuple(tuple);
    return formatEncryptedContentByContentStructure(structure);
};

export const formatTokenByTuple = (tuple: TokenTuple): string => {

    const structure: TokenStructure = structureJWTByTuple(tuple);
    return formatTokenByStructure(structure);
};
