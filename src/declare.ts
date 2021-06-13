/**
 * @author WMXPY
 * @namespace JWTConfig
 * @description Declare
 */

export type JWTOptionalHeader = {

    readonly aud?: string; // Audience
    readonly exp?: number; // Expiration Time
    readonly jti?: string; // JWT ID
    readonly iat?: number; // Issued At
    readonly iss?: string; // Issuer
    readonly nbf?: number; // Not Before
    readonly sub?: string; // Subject
    readonly ver?: string; // Version
};

export type JWTFixedHeader = {

    readonly alg: 'RS256';
    readonly typ: 'JWT';
} & JWTOptionalHeader;

export type OptionalVerbalHeaders = {

    readonly availableAt?: Date;
    readonly expirationAt?: Date;
    readonly issuedAt?: Date;

    readonly audience?: string;
    readonly identifier?: string;
    readonly issuer?: string;
    readonly subject?: string;
    readonly version?: string;
};

export type JWTJoinedHeader<Header extends Record<string, any>> = Header & JWTFixedHeader;

export type TokenTuple = [string, string, string];
export type TokenContentTuple = [string, string];

export type TokenMap<Header extends Record<string, any>, Body extends Record<string, any>> = {

    header: JWTJoinedHeader<Header>;
    body: Body;
    signature: string;
};

export type TokenStructure = {

    readonly header: string;
    readonly body: string;
    readonly signature: string;
};

export type TokenContentStructure = {

    readonly header: string;
    readonly body: string;
    readonly signature: string;
};
