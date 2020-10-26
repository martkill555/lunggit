"use strict";
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileController = void 0;
const msRest = __importStar(require("@azure/ms-rest-js"));
const Mappers = __importStar(require("../models/fileControllerMappers"));
const Parameters = __importStar(require("../models/parameters"));
/** Class representing a FileController. */
class FileController {
    /**
     * Create a FileController.
     * @param {LungscanAPIContext} client Reference to the service client.
     */
    constructor(client) {
        this.client = client;
    }
    uploadFile(options, callback) {
        return this.client.sendOperationRequest({
            options
        }, uploadFileOperationSpec, callback);
    }
    getById(id, options, callback) {
        return this.client.sendOperationRequest({
            id,
            options
        }, getByIdOperationSpec, callback);
    }
    discardById(id, options, callback) {
        return this.client.sendOperationRequest({
            id,
            options
        }, discardByIdOperationSpec, callback);
    }
}
exports.FileController = FileController;
// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const uploadFileOperationSpec = {
    httpMethod: "POST",
    path: "api/file",
    responses: {
        201: {},
        default: {}
    },
    serializer
};
const getByIdOperationSpec = {
    httpMethod: "GET",
    path: "api/file/{id}",
    urlParameters: [
        Parameters.id
    ],
    responses: {
        200: {},
        default: {}
    },
    serializer
};
const discardByIdOperationSpec = {
    httpMethod: "DELETE",
    path: "api/file/{id}",
    urlParameters: [
        Parameters.id
    ],
    responses: {
        200: {},
        default: {}
    },
    serializer
};
//# sourceMappingURL=fileController.js.map