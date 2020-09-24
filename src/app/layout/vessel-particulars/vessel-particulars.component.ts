import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/interfaces/app-state';
import { BasePageComponent } from 'src/app/pages/base-page';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'vessel-particulars',
  templateUrl: './vessel-particulars.component.html',
  styleUrls: ['./vessel-particulars.component.scss']
})
export class VesselParticularsComponent extends BasePageComponent implements OnInit, OnDestroy {
  tableData: any[];

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService
  ) {
    super(store, httpSv);

    this.pageData = {
      title: 'VESSEL PARTICULARS',
      loaded: true,
      breadcrumbs: [
        // {
        //   title: 'UI Kit',
        //   route: 'default-dashboard'
        // },
        // {
        //   title: 'Tables',
        //   route: 'default-dashboard'
        // },
        // {
        //   title: 'Filtering'
        // }
      ]
    };
    this.tableData = [
      {
        "vesselId": 123,
        "vesselName": 123,
        "vesselCode": 123,
        "type": 123,
        "maxTeus": 123,
        "cargoType": 123,
        "status": 123
      }
    ];
  }

  ngOnInit() {
    super.ngOnInit();
    let request = {
      "columns": [
      ],
      "start": 1,
      "length": 100,
    }
    this.httpSv.getVesselDetails(request).subscribe(response => {
      console.log(response);
    });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
