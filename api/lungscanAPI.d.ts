import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { LungscanAPIContext } from "./lungscanAPIContext";
declare class LungscanAPI extends LungscanAPIContext {
    usersController: operations.UsersController;
    patientsController: operations.PatientsController;
    filmsController: operations.FilmsController;
    resultsController: operations.ResultsController;
    fileController: operations.FileController;
    /**
     * Initializes a new instance of the LungscanAPI class.
     * @param [options] The parameter options
     */
    constructor(options?: Models.LungscanAPIOptions);
}
export { LungscanAPI, LungscanAPIContext, Models as LungscanAPIModels, Mappers as LungscanAPIMappers };
export * from "./operations";
