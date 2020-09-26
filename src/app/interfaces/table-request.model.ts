export class DataTableRequest {
    columns: [];
    start: number;
    length: number;

    constructor() {
        this.columns = [];
        this.start = 1;
        this.length = 100;
    }
}