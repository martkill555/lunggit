import * as msRest from "@azure/ms-rest-js";
import { LungscanAPIContext } from "../lungscanAPIContext";
/** Class representing a FileController. */
export declare class FileController {
    private readonly client;
    /**
     * Create a FileController.
     * @param {LungscanAPIContext} client Reference to the service client.
     */
    constructor(client: LungscanAPIContext);
    /**
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    uploadFile(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param callback The callback
     */
    uploadFile(callback: msRest.ServiceCallback<void>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     */
    uploadFile(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param id
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    getById(id: number, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param id
     * @param callback The callback
     */
    getById(id: number, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param id
     * @param options The optional parameters
     * @param callback The callback
     */
    getById(id: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param id
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    discardById(id: number, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param id
     * @param callback The callback
     */
    discardById(id: number, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param id
     * @param options The optional parameters
     * @param callback The callback
     */
    discardById(id: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
}
