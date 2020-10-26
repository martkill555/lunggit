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
exports.LungscanAPIContext = void 0;
const msRest = __importStar(require("@azure/ms-rest-js"));
const packageName = "";
const packageVersion = "";
class LungscanAPIContext extends msRest.ServiceClient {
    /**
     * Initializes a new instance of the LungscanAPIContext class.
     * @param [options] The parameter options
     */
    constructor(options) {
        if (!options) {
            options = {};
        }
        if (!options.userAgent) {
            const defaultUserAgent = msRest.getDefaultUserAgentValue();
            options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
        }
        super(undefined, options);
        this.baseUri = options.baseUri || this.baseUri || "http://localhost";
        this.requestContentType = "application/json; charset=utf-8";
    }
}
exports.LungscanAPIContext = LungscanAPIContext;
//# sourceMappingURL=lungscanAPIContext.js.map