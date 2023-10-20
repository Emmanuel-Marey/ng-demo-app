import { ICellRendererComp, ICellRendererParams } from "ag-grid-community";

export class CountryCellRenderer implements ICellRendererComp {
    eGui!: HTMLElement;

    init(params: ICellRendererParams) {
        const code = this.getCountryCode(params.data.country);
        const flag = `<img border="0" width="15" height="10" src="/assets/images/flag/${code}.png">`;
        const element = document.createElement('div');
        element.innerHTML = `<span style="cursor: default;">${flag} ${params.value}</span>`;
        this.eGui = element.firstElementChild as HTMLElement;
    }

    getGui() {
        return this.eGui;
    }

    refresh(params: ICellRendererParams): boolean {
        return false;
    }

    getCountryCode(country: string): string {
        var code: string;
        switch (country) {
            case "United States": code = "usa"; break;
            case "Russia": code = "rus"; break;
            case "Australia": code = "aus"; break;
            case "Canada": code = "can"; break;
            case "Norway": code = "nor"; break;
            case "China": code = "chn"; break;
            case "Zimbabwe": code = "zwe"; break;
            case "Netherlands": code = "nld"; break;
            default:
                code = ""; break;
        }
        return code;
    }
}