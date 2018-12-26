import { Component, OnInit } from '@angular/core';

import { RequestPayload, IdPayload } from "./models/request-payload";
import { MainService } from "./services/main.service";

import { ResponseClass, Item } from "./models/response.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  language: string;
  owner: string;
  repo: string;

  req: RequestPayload = new RequestPayload();

  displayedColumns : string[] = [
    'name', 'url', 'description', 'owner'
  ];

  ids = [];

  itemsToDisplay : Item[] = [];

  constructor(
    readonly main : MainService
  ){

  }

  ngOnInit(){
    let id = new IdPayload();
    this.main.getIds(id).subscribe((data : any) => {
      for (let item of data.ids){
        if(!this.ids.includes(item.id)){
          this.ids.push(item.id);
        }
      }
      console.log(this.ids);
    });
  }

  initiateSearch(){
    this.req.language = this.language? this.language: null ;
    this.req.owner = this.owner? this.owner: null ;
    this.req.repo = this.repo? this.repo: null ;

    this.main.getServiceResponse(this.req).subscribe((data : ResponseClass) => {
      this.itemsToDisplay = data.items;
    });
  }

  openUrl(url, id){
    var win = window.open(url, '_blank');
    win.focus(); 

    let idReq = new IdPayload();
    idReq.id = id

    if(!this.ids.includes(id)){
      this.ids.push(id);
      this.main.saveTheId(idReq).subscribe((data : ResponseClass) => {
        this.itemsToDisplay = data.items;
      });
    }

  }

  isAlreadyOpened(id){
    if(this.ids.includes(id)){
      return true;
    }else{
      return false;
    }
  }

}
