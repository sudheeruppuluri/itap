export class TonnagePerformance {
    JAN: string;
    FEB: string;
    MAR: string;
    APR: string;
    MAY: string;
    JUN: string;
    JUL: string;
    AUG: string;
    SEP: string;
    OCT: string;
    NOV: string;
    DEC: string;
}

export interface DashboardResponse {
    noOfVessels: string;
    vesselsPerc: string;
    tonnageLoading: string;
    loadingPerc: string;
    tonnageDischarging: string;
    dischargePerc: string;
    registeredVessels: string;
    plotBooking: string;
    vesselBerthing: string;
    billPosted: string;
    tonnagePerformance: TonnagePerformance;
}
