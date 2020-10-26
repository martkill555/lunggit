import * as msRest from "@azure/ms-rest-js";
import { LungscanAPIContext } from "../lungscanAPIContext";
/** Class representing a ResultsController. */
export declare class ResultsController {
    private readonly client;
    /**
     * Create a ResultsController.
     * @param {LungscanAPIContext} client Reference to the service client.
     */
    constructor(client: LungscanAPIContext);
    /**
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    getAll(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param callback The callback
     */
    getAll(callback: msRest.ServiceCallback<void>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     */
    getAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param body
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    createOne(body: any, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param body
     * @param callback The callback
     */
    createOne(body: any, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param body
     * @param options The optional parameters
     * @param callback The callback
     */
    createOne(body: any, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
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
}
