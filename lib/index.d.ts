export interface ClientParams {
    host?: string;
    port?: number;
    path?: string;
    url?: string;
    password?: string;
    retry_strategy?: Function;
}
declare var _default: {
    createClient: (params: ClientParams) => any;
};
export default _default;
