import { ServiceClientOptions } from "@azure/ms-rest-js";
/**
 * An interface representing LoginDto.
 */
export interface LoginDto {
    username: string;
    password: string;
}
/**
 * An interface representing CreatePatientDto.
 */
export interface CreatePatientDto {
    firstname: string;
    /**
     * Lastname of the patient
     */
    lastname: string;
    dOB: Date;
}
/**
 * An interface representing LungscanAPIOptions.
 */
export interface LungscanAPIOptions extends ServiceClientOptions {
    baseUri?: string;
}
