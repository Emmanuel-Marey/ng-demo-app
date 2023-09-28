export interface Country {
    name: string;
    capital: string;
    alpha3Code: string;
    population: number;
    flag: string;
}

// https://flaglog.com/

export const dataset: Array<Country> = [
    {
        name: "Iran",
        capital: "Tehran",
        alpha3Code: "IRN",
        population: 79,
        flag: "irn"
    },
    {
        name: "Turkey",
        capital: "Ankara",
        alpha3Code: "TUR",
        population: 78,
        flag: "tur"
    },
    {
        name: "Germany",
        capital: "Berlin",
        alpha3Code: "DEU",
        population: 81,
        flag: "deu"
    },
    {
        name: "France",
        capital: "Paris",
        alpha3Code: "FRA",
        population: 66,
        flag: "fra"
    },
    {
        name: "Italy",
        capital: "Rome",
        alpha3Code: "ITA",
        population: 60,
        flag: "ita"
    },
    {
        name: "Serbia",
        capital: "Belgrade",
        alpha3Code: "SRB",
        population: 70,
        flag: "srb"
    },
    {
        name: "United Kingdom",
        capital: "London",
        alpha3Code: "GBR",
        population: 65,
        flag: "gbr"
    },
    {
        name: "United States",
        capital: "Washington D.C",
        alpha3Code: "USA",
        population: 323,
        flag: "usa"
    },
    {
        name: "Russia",
        capital: "Moscow",
        alpha3Code: "RUS",
        population: 146,
        flag: "rus"
    },
    {
        name: "China",
        capital: "Beijing",
        alpha3Code: "CHN",
        population: 1377,
        flag: "chn"
    },
    {
        name: "India",
        capital: "New Delhi",
        alpha3Code: "IND",
        population: 1295,
        flag: "ind"
    }
];