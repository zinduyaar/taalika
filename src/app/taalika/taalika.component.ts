import { Component, OnInit,Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { VerticalBarClass } from './vertical-bar.class';

@Component({
    selector: 'taalika',
    templateUrl: './taalika.component.html',
    styleUrls: ['./taalika.component.css']
})
export class TaalikaComponent implements OnInit {
    verticalBars: VerticalBarClass[];
    horizontalBars: String[];
    topBarVisibility: boolean;
    bottomBarVisibility: boolean;

    // private _taalikaData = new BehaviorSubject<any[]>([]);
    @Input() data;
    // set data(value){
    //     this._taalikaData.next(value);
    // }
    // get data() {
    //     return this._taalikaData.getValue();
    // }

    ngOnInit() {
        // this._taalikaData
        //     .subscribe(x => {
        //         //console.log(this.data);
        //     });
        this.renderTaalika();
        
        // array.forEach(element => {
            
        // });
    }

    renderTaalika() {

        // Harcoded begins
        this.topBarVisibility = false;
        this.bottomBarVisibility=false;
        this.verticalBars = [{ id: 1, name: 'id', headerName: 'User Id' },
        { id: 2, name: 'name', headerName: 'Name' },
        { id: 3, name: 'username', headerName: 'Username' },
        { id: 4, name: 'email', headerName: 'Email' },
        { id: 5, name: 'phone', headerName: 'Phone' },
        { id: 6, name: 'website', headerName: 'Website' }
        ];
        // Harcoded ends
    }







}