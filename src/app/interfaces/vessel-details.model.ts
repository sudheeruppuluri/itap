export interface VesselDetails {
    shipId: string;
    vesselType: string;
    scn: string;
    shipName: string;
    spStatus: string;
    cargoType: string;
    MaximumTeus: string;
    loa: number;
    grt: number;
    vesselCode: string;
    terminalCode: string;
    wharfCode: string;
    etaDate: string;
    etbDate: string;
    etdDate: string;
    ataDate: string;
    atbDate: string;
    atdDate: string;
    omit: boolean;
    startMeterMark: number;
    endMeterMark: number;
    pageSize: number;
    searchIndicatorOn: boolean;
    completedStatus: number;
    pendingStatus: number;
    pinned: boolean;
    costEstimationGenerated: boolean;
    costEstimationCompleted: boolean;
    etdIndicator: boolean;
    defaultServiceAdded: boolean;
    voucherGenerated: boolean;
    billGenerated: boolean;
}

export class VesseslParticular {
    vesselId: string;
    vesselName: string;
    vesselCode: string;
    type: string;
    maxTeus: string;
    cargoType: string;
    status: string;

    constructor(data: VesselDetails) {
        this.vesselId = data.shipId;
        this.vesselName = data.shipName;
        this.vesselCode = data.vesselCode;
        this.type = data.vesselType;
        this.maxTeus = data.MaximumTeus;
        this.cargoType = data.cargoType;
        this.status = data.spStatus;
    }
}

export class VesselVisit {
    scn: string;
    vesselName: string;
    ata: string;
    type: string;
    eta: string;
    etb: string;
    cargoName: string;
    status: string;

    constructor( data: VesselDetails) {
        this.scn = data.scn;
        this.vesselName = data.shipName;
        this.ata = data.ataDate;
        this.type = data.cargoType;
        this.eta = data.etaDate;
        this.etb = data.etbDate;
        this.cargoName = data.shipName;
        this.status = data.spStatus;
    }
}