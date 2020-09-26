import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/interfaces/app-state';
import { BasePageComponent } from 'src/app/pages/base-page';
import { HttpService } from 'src/app/services/http/http.service';
import { DataTableRequest }  from 'src/app/interfaces/table-request.model';
import { VesselDetails, VesselVisit }  from 'src/app/interfaces/vessel-details.model';

@Component({
  selector: 'vessel-details',
  templateUrl: './vessel-details.component.html',
  styleUrls: ['./vessel-details.component.scss']
})
export class VesselDetailsComponent extends BasePageComponent implements OnInit, OnDestroy {
  tableData: VesselVisit[] = [];

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
  }

  ngOnInit() {
    super.ngOnInit();
    let request = new DataTableRequest();
    this.httpSv.getVesselDetails(request).subscribe((response: VesselDetails[]) => {
      if (response) {
        response.forEach(v=>{
          let data = new VesselVisit(v);
          this.tableData.push(data);
        });
      }
    });
    // let request2 = {
    //   username: "pavan",
    //   password: "pavan"
    // }
    // this.httpSv.validateLogin(request2).subscribe(response => {
    //   console.log(response);
    // });
    // this.httpSv.getDashdboardDetails().subscribe(response => {
    //   console.log(response);
    // });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
