import { ICellRendererParams, ValueFormatterParams, ValueParserParams } from "@ag-grid-community/core";

export interface IPosition {
    product: string;
    market: string;
    quantity: number;
    open: number;
    last: number;
    spot: number;
    volatility: number;
}

var products = [
    'Palm oil',
    'Rubber',
    'Wool',
    'Amber',
    'Copper',
    'Lead',
    'Zinc',
    'Aluminium',
    'Nickel',
    'Cobalt',
    'Recycled steel',
    'Corn',
    'Oats',
    'Rough rice',
    'Soybeans',
    'Rapeseed',
    'Soybean meal',
    'Soybean oil',
    'Wheat',
    'Milk',
    'Coca',
    'Coffee',
    'Cotton',
    'Sugar',
];

export function getPositions(): IPosition[] {
    const positions: IPosition[] = [];
    for (let i = 0; i < products.length; i++) {
        let quantity = randomBetween(0, 1000);
        let open = randomBetween(1, 10000) / 100.0;
        let volatility = randomBetween(5, 25);

        positions.push({
            product: products[i],
            market: 'United States',
            quantity: quantity,
            open: open,
            last: open,
            spot: open,
            volatility: volatility
        });
    }
    return positions;
}

export function computeNewSpot(last: number, volatility: number): number {
    let variation = randomBetween(0, volatility) / 1000;
    let way = randomBetween(0, 1) < 0.5 ? -1 : 1;
    let spot = last * (1 + way * variation);
    if (spot < 0) {
        spot = last;
    }
    return spot;
}

export function randomBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function numberValueParser(params: ValueParserParams) {
    return Number(params.newValue);
}

export function quantityCellFormatter(params: ValueFormatterParams) {
    return formatNumber(params.value, 0);
}

export function currencyCellFormatter(params: ValueFormatterParams) {
    return '$ ' + formatNumber(params.value, 2);
}

export function percentageCellFormatter(params: ValueFormatterParams) {
    return formatNumber(params.value, 2) + ' %';
}

export function formatNumber(number: number, digits: number) {
    return number
        .toFixed(digits)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export function lastCellRenderer(params: ICellRendererParams) {
    let last: number = Number(params.data.last);
    let value = '$ ' + formatNumber(last, 2);
    let html: string;
    if (params.data.last < params.data.open) {
        html = '<span style="color: salmon">' + value + '</span>';
    } else if (params.data.last > params.data.open) {
        html = '<span style="color: lightgreen">' + value + '</span>';
    } else {
        html = '<span style="color: white">' + value + '</span>';
    }
    return html;
}

export function copyObject(object: any): any {
    var newObject: any = {};
    console.log("object: " + JSON.stringify(object));
    Object.keys(object).forEach(function (key) {
        newObject[key] = object[key];
    });
    console.log("clone: " + JSON.stringify(newObject));
    return newObject;
}