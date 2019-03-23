import { Component, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { NgxNavService } from '../utils/nav.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatMenu } from '@angular/material';
import { NgxMaterialDrawerEventEmitter } from '../utils/mat-event-emitter.service';

@Component({
    selector: 'app-fab',
    templateUrl: './fab.component.html',
    styleUrls: ['./fab.component.scss'],
    animations: [
        trigger('slideInOut', [
            transition(':enter', [
                style({ transform: 'translateY(100%)' }),
                animate('200ms ease-in', style({ transform: 'translateY(0%)' }))
            ]),
            transition(':leave', [
                animate('200ms ease-in', style({ transform: 'translateY(100%)' }))
            ])
        ])
    ]
})
export class NgxFabComponent implements OnInit {
    public expanded: boolean = false;
    @Input() fabData: any;
    constructor(public navService: NgxNavService,
        public matEventEmitterService: NgxMaterialDrawerEventEmitter) {

    }

    ngOnInit() {

    }

    onFabClick(item: any) {

    }

    onMainFabClick(item: any) {
        this.expanded = !this.expanded;
    }
}
