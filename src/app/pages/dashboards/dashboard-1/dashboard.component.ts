import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { EChartOption } from 'echarts';
import { BasePageComponent } from '../../base-page';
import { IAppState } from '../../../interfaces/app-state';
import { HttpService } from '../../../services/http/http.service';
import { DashboardResponse } from '../dashboard-1/dashboard.model'

@Component({
  selector: 'page-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class PageDashboardComponent extends BasePageComponent implements OnInit, OnDestroy {
  public data: DashboardResponse;
  spinner = true;
  public lineOptions = {
    grid: {
      left: 0,
      right: 0,
      bottom: 0,
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['January', 'February', 'March', 'April', 'May', 'June']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [],
      type: 'line',
      lineStyle: {
        normal: {
          color: '#ed5564',
        }
      },
    }]
  };


  constructor(
    store: Store<IAppState>,
    httpSv: HttpService
  ) {
    super(store, httpSv);

    this.pageData = {
      title: '',
      loaded: false,
      breadcrumbs: [
        // {
        //   title: 'Dashboards',
        //   route: 'default-dashboard'
        // },
        // {
        //   title: 'Default'
        // }
      ]
    };

  }

  ngOnInit() {
    super.ngOnInit();

    this.getData('assets/data/last-appointments.json', 'appointments', 'setLoaded');

    this.httpSv.getDashdboardDetails().subscribe((response: DashboardResponse) => {
      console.log(response);
      if (response) {
        this.spinner = false;
        this.data = response;
        this.lineOptions.series[0].data.push(Math.ceil(parseInt(response.tonnagePerformance.JAN) / 100000));
        this.lineOptions.series[0].data.push(Math.ceil(parseInt(response.tonnagePerformance.FEB) / 100000));
        this.lineOptions.series[0].data.push(Math.ceil(parseInt(response.tonnagePerformance.MAR) / 100000));
        this.lineOptions.series[0].data.push(Math.ceil(parseInt(response.tonnagePerformance.APR) / 100000));
        this.lineOptions.series[0].data.push(Math.ceil(parseInt(response.tonnagePerformance.MAY) / 100000));
        this.lineOptions.series[0].data.push(Math.ceil(parseInt(response.tonnagePerformance.JUN) / 100000));
      }
    });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }


}
