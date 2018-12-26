import { Injectable } from "@angular/core";

import { RequestDispatcher } from "./request-dispatcher.service";
import { RequestPayload, IdPayload } from "../models/request-payload";

@Injectable()
export class MainService{
    constructor(
        readonly request : RequestDispatcher
    ){}

    getServiceResponse(req: RequestPayload){
        return this.request.postRequest(req, 'search');
    }

    saveTheId(req : IdPayload){
        return this.request.postRequest(req, 'addId');
    }

    getIds(req : IdPayload){
        return this.request.postRequest(req, 'getIds');
    }
}