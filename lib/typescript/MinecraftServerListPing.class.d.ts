export declare type SampledPlayerType = {
    /** The player's name */
    name: string;
    /** The unique ID of the player */
    id: string;
};
export declare type Ping17ReturnType = {
    version: {
        /** The version string, e.g. 1.8.7 */
        name: string;
        /** The protocol version, e.g. 47 */
        protocol: number;
    };
    players: {
        /** The maximum amount of players */
        max: number;
        /** The number of players online */
        online: number;
        /** Sample of online players. The sample field may be missing if the server has no online players */
        sample?: SampledPlayerType[];
    };
    /**
     * The description field
     */
    description: {
        text: string;
    };
    /**
     * The favicon field is optional, and should be a PNG image that is Base64 encoded (without newlines: \n, new lines no longer work since 1.13)
     * and prepended with data:image/png;base64,
     */
    favicon?: string;
};
export declare type Ping16ReturnType = {
    "version": {
        "name": string;
        "protocol": number;
    };
    "players": {
        "max": number;
        "online": number;
    };
    "description": string;
};
export declare type Ping15ReturnType = {
    "version": {
        "name": string;
        "protocol": number;
    };
    "players": {
        "max": number;
        "online": number;
    };
    "description": string;
};
export declare type Ping13ReturnType = {
    "players": {
        "max": number;
        "online": number;
    };
    "description": string;
};
export declare class MinecraftServerListPing {
    static ping(protocol: number | undefined, host: string, port?: number, timeout?: number): Promise<Ping17ReturnType>;
    static ping16(protocol: number | undefined, host: string, port?: number, timeout?: number): Promise<Ping16ReturnType>;
    static ping15(host: string, port?: number, timeout?: number): Promise<Ping15ReturnType>;
    static ping13(host: string, port?: number, timeout?: number): Promise<Ping13ReturnType>;
}
//# sourceMappingURL=MinecraftServerListPing.class.d.ts.map