/**
 * @author WMXPY
 * @namespace JWTConfig
 * @description JWT
 */

import { JWTOptionalHeader, OptionalVerbalHeaders } from "./declare";
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
