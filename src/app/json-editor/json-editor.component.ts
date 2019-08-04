import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { NgxMaterialDrawerEventEmitter } from 'projects/ngx-material-drawer/src/public_api';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.scss']
})
export class EditorComponent implements OnInit {
  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;
  public editorOptions: JsonEditorOptions;
  public data: any;
  private fg: FormGroup;

  constructor(public matEventEmitterService: NgxMaterialDrawerEventEmitter, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<EditorComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.modes = ['tree']; // set all allowed modes
    this.editorOptions.mode = 'tree'; //set only one mode
    this.editorOptions.expandAll = true; //set only one mode
    this.data = data;


  }
  private isValidJson(json) {
    try {
      JSON.parse(json);
      return true;
    } catch (e) {
      return false;
    }
  }
  ngOnInit(): void {
    this.fg = this.formBuilder.group({
      jsonEditorForm: [this.data]
    });
    this.fg.controls.jsonEditorForm.valueChanges.subscribe(v => {
      if (this.isValidJson(JSON.stringify(v))) {
        this.data = v
      }
    })
  }
  onCloseClick(): void {
    if (this.data) {
      this.dialogRef.close(this.data);
    } else {
      console.log("Invalid json", this.data)
    }
  }
}