import { Component, OnInit } from '@angular/core';
import { BlueCardComponent } from '../blue-card/blue-card.component';
import { RedCardComponent } from '../red-card/red-card.component';
import { GreenCardComponent } from '../green-card/green-card.component';
import { MatDialog } from '@angular/material';
import { NgxMaterialDrawerEventEmitter } from 'projects/ngx-material-drawer/src/public_api';
import { EditorComponent } from 'src/app/json-editor/json-editor.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.scss']
})
export class GridContainerComponent implements OnInit {
  componentInstance = {
    'c1': { component: BlueCardComponent, data: { text: "I am the Blue C1 component" } },
    'c2': { component: RedCardComponent, data: { text: "I am the Red C2 component" } },
    'c3': { component: GreenCardComponent, data: { text: "I am the Green C3 component" } },
    'c4': { component: BlueCardComponent, data: { text: "I am the Blue C4 component" } },
    'c5': { component: RedCardComponent, data: { text: "I am the Red C5 component" } },
    'c6': { component: GreenCardComponent, data: { text: "I am the Green C6 component" } },
  }
  gridData = {
    cols: 12,
    rowHeight: '200px',
    gutterSize: '10px',
    grids: {
      xl: {
        grid: [
          { cols: 6, rows: 1, component: 'c1' },
          { cols: 6, rows: 1, component: 'c2' },
          { cols: 12, rows: 2, component: 'c3' },
          { cols: 4, rows: 1, component: 'c4' },
          { cols: 4, rows: 1, component: 'c5' },
          { cols: 4, rows: 1, component: 'c6' },
        ]
      },
      sm: {
        grid: [
          { cols: 12, rows: 1, component: 'c1' },
          { cols: 12, rows: 1, component: 'c2' },
          { cols: 12, rows: 1, component: 'c3' },
          { cols: 12, rows: 1, component: 'c4' },
          { cols: 12, rows: 1, component: 'c5' },
          { cols: 12, rows: 1, component: 'c6' },
        ]
      }
    }
  }

  constructor(public dialog: MatDialog, public matEventEmitterService: NgxMaterialDrawerEventEmitter) {
    this.matEventEmitterService.onMenuItemClick.subscribe((event:any) =>{
      if (event.route == 'open-dashboard-json') {
        const dialogRef = this.dialog.open(EditorComponent, {
          width: '80%',
          data: this.gridData
        });
  
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.gridData = result;
          this.matEventEmitterService.gridDataChange(this.gridData)
        });
      }
    })

  }

  ngOnInit() {
  }

  onGridDataChange($event) {
    this.gridData = $event
  }
}
