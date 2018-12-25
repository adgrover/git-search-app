import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { RestEndPoint } from "../constants/constants";


@Injectable()
export class RequestDispatcher{

    constructor(
        private httpClient: HttpClient
    ){}

    postRequest(json, api : string){
        let url = RestEndPoint.url + api;
        return this.httpClient.post(url, json);
    }

}