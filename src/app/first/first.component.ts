import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { NgxMaterialDrawerEventEmitter } from 'projects/ngx-material-drawer/src/public_api';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  public editorOptions: JsonEditorOptions;
  public data: any;
  public navData: any;

  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;

  constructor(public matEventEmitterService: NgxMaterialDrawerEventEmitter) {
    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
    this.editorOptions.mode = 'code'; //set only one mode
    this.matEventEmitterService.onDataChange.subscribe(res => {
      this.navData = res;
    })

  }
  ngOnInit(): void {
    //throw new Error("Method not implemented.");
   
  }
  getData($event) {
    console.log($event)
    this.matEventEmitterService.dataChange($event);
  }
}