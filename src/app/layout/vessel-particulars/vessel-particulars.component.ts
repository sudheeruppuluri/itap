import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/interfaces/app-state';
import { BasePageComponent } from 'src/app/pages/base-page';
import { HttpService } from 'src/app/services/http/http.service';

import { DataTableRequest }  from 'src/app/interfaces/table-request.model';
import { VesselDetails, VesseslParticular }  from 'src/app/interfaces/vessel-details.model';

@Component({
  selector: 'vessel-particulars',
  templateUrl: './vessel-particulars.component.html',
  styleUrls: ['./vessel-particulars.component.scss']
})
export class VesselParticularsComponent extends BasePageComponent implements OnInit, OnDestroy {
  tableData: VesseslParticular[] = [];

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
  }

  ngOnInit() {
    super.ngOnInit();
    let request = new DataTableRequest();
    this.httpSv.getVesselDetails(request).subscribe((response: VesselDetails[]) => {
      if (response) {
        response.forEach(v=>{
          let data = new VesseslParticular(v);
          this.tableData.push(data);
        });
      }
    });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
