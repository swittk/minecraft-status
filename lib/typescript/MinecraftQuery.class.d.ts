declare type UnusedCallbackType = (error?: any | null, data?: any | null) => void;
export declare type ServerModificationType = {
    name: string;
    plugins: string[] | null;
};
export declare type FullQueryReturnType = {
    "version": {
        "name": string;
    };
    "players": {
        "online": number;
        "max": number;
        "sample": string[];
    };
    "description": string;
    "map": string;
    "game_type": string;
    "game_id": string;
    "server_modification": ServerModificationType | null;
};
export declare type QueryReturnType = {
    "players": {
        "online": number;
        "max": number;
    };
    "description": string;
    "map": string;
    "game_type": string;
};
export declare class MinecraftQuery {
    static query(host: string, port?: number, callback?: UnusedCallbackType | undefined, timeout?: number): Promise<QueryReturnType>;
    static fullQuery(host: string, port?: number, callback?: UnusedCallbackType | undefined, timeout?: number): Promise<FullQueryReturnType>;
}
export {};
//# sourceMappingURL=MinecraftQuery.class.d.ts.map