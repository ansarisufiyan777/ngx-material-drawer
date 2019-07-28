import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { NgxMaterialDrawerEventEmitter } from 'projects/ngx-material-drawer/src/public_api';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.scss']
})
export class EditorComponent implements OnInit {
  public editorOptions: JsonEditorOptions;
  public data: any;

  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;

  constructor(public matEventEmitterService: NgxMaterialDrawerEventEmitter,public dialogRef: MatDialogRef<EditorComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
      
    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
    this.editorOptions.mode = 'code'; //set only one mode
    this.data = data;
    
  }
  ngOnInit(): void {
    //throw new Error("Method not implemented.");
   
  }
  getData($event) {
    console.log($event)
    this.data = $event
    //this.matEventEmitterService.dataChange($event);
  }
  onCloseClick(): void {
    this.dialogRef.close(this.data);
  }
}