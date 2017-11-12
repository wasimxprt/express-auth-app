import config from '../config/config';
import request from "request";

/** 
 *  Company class with methods for company management
 */
export class CompanyController {

    /**
     * constructor to initialize the properties
     */
    constructor() {}

    /**
     * Method to find company by id
     */
    findCompanyById = (req, res, next) => {
        let id = req.params.id;
        return new Promise((resolve, reject) => {

            request('http://avoindata.prh.fi/opendata/bis/v1/' + id, function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    var results = response;
                    resolve(results);
                    res.json({ status: true, results, "message": "Company found" });
                    next();
                } else {
                    reject("Company not found!");
                    reject(res.json({ status: false, error: "No company found!" }));
                    next();
                }
            });
        });
    }
}

const companyController = new CompanyController();
export default companyController;