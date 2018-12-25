import { Injectable } from "@angular/core";

import { RequestDispatcher } from "./request-dispatcher.service";
import { RequestPayload } from "../models/request-payload";

@Injectable()
export class MainService{
    constructor(
        readonly request : RequestDispatcher
    ){}

    getServiceResponse(req: RequestPayload){
        return this.request.postRequest(req, 'search');
    }
}