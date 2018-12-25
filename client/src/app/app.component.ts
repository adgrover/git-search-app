import { Component } from '@angular/core';

import { RequestPayload } from "./models/request-payload";
import { MainService } from "./services/main.service";

import { ResponseClass, Item } from "./models/response.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  language: string;
  owner: string;
  repo: string;

  req: RequestPayload = new RequestPayload();

  displayedColumns : string[] = [
    'name', 'url', 'description', 'owner'
  ];

  itemsToDisplay : Item[] = [];

  constructor(
    readonly main : MainService
  ){

  }

  initiateSearch(){
    this.req.language = this.language? this.language: null ;
    this.req.owner = this.owner? this.owner: null ;
    this.req.repo = this.repo? this.repo: null ;

    this.main.getServiceResponse(this.req).subscribe((data : ResponseClass) => {
      this.itemsToDisplay = data.items;
    });
  }

  openUrl(url){
    var win = window.open(url, '_blank');
    win.focus(); 
  }

}
