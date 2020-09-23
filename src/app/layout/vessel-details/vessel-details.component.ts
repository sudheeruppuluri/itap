import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/interfaces/app-state';
import { BasePageComponent } from 'src/app/pages/base-page';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'vessel-details',
  templateUrl: './vessel-details.component.html',
  styleUrls: ['./vessel-details.component.scss']
})
export class VesselDetailsComponent extends BasePageComponent implements OnInit, OnDestroy {
  tableData: any[];

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService
  ) {
    super(store, httpSv);

    this.pageData = {
      title: 'VESSEL VISIT',
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
        "scn": 123,
        "vesselName": 123,
        "ata": 123,
        "type": 123,
        "eta": 123,
        "etb": 123,
        "cargoName": 123,
        "status": 123
      }
    ];
  }

  ngOnInit() {
    super.ngOnInit();
    let request = {
      "vesselVisitDto": [
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
