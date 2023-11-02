import { ICellRendererComp, ICellRendererParams } from "@ag-grid-community/core";

export class MarketCellRenderer implements ICellRendererComp {
    eGui!: HTMLElement;

    init(params: ICellRendererParams) {
        const code = this.getMarketCode(params.data.market);
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

    getMarketCode(market: string): string {
        console.log(market);

        var code: string;
        switch (market) {
            case "United States": code = "usa"; break;
            default:
                code = ""; break;
        }
        return code;
    }
}