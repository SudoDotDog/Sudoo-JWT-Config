/**
 * @author WMXPY
 * @namespace JWTConfig
 * @description JWT
 */

import { JWTFixedHeader, JWTOptionalHeader, OptionalVerbalHeaders } from "./declare";
import { fixNowDate, fixUndefinableDate } from "./util";

export const extractJWTVerbalHeader = (verbalHeader: OptionalVerbalHeaders): JWTOptionalHeader => {

    const optionalHeaders: JWTOptionalHeader = {

        aud: verbalHeader.audience,
        exp: fixUndefinableDate(verbalHeader.expirationAt),
        jti: verbalHeader.identifier,
        iat: fixNowDate(verbalHeader.issuedAt),
        iss: verbalHeader.issuer,
        nbf: fixUndefinableDate(verbalHeader.availableAt),
        sub: verbalHeader.subject,
        ver: verbalHeader.version,
    };

    return optionalHeaders;
};

export const extractJWTFixedHeader = (verbalHeader: OptionalVerbalHeaders): JWTFixedHeader => {

    const optionalHeaders: JWTOptionalHeader = extractJWTVerbalHeader(verbalHeader);

    const keys: Array<keyof JWTOptionalHeader> = Object.keys(optionalHeaders) as Array<keyof JWTOptionalHeader>;
    const fixedHeaders: JWTFixedHeader = keys.reduce((previous: JWTFixedHeader, currentKey: keyof JWTOptionalHeader) => {

        if (typeof optionalHeaders[currentKey] !== 'undefined') {
            return {
                ...previous,
                [currentKey]: optionalHeaders[currentKey],
            };
        }
        return previous;
    }, {
        alg: 'RS256',
        typ: 'JWT',
    });

    return fixedHeaders;
};
