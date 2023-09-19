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
        flag: "./assets/images/flag/Iran.png"
    },
    {
        name: "Turkey",
        capital: "Ankara",
        alpha3Code: "TUR",
        population: 78,
        flag: "./assets/images/flag/Turkey.png"
    },
    {
        name: "Germany",
        capital: "Berlin",
        alpha3Code: "DEU",
        population: 81,
        flag: "./assets/images/flag/Germany.png"
    },
    {
        name: "France",
        capital: "Paris",
        alpha3Code: "FRA",
        population: 66,
        flag: "./assets/images/flag/France.png"
    },
    {
        name: "Italy",
        capital: "Rome",
        alpha3Code: "ITA",
        population: 60,
        flag: "./assets/images/flag/Italy.png"
    },
    {
        name: "Serbia",
        capital: "Belgrade",
        alpha3Code: "SRB",
        population: 70,
        flag: "./assets/images/flag/Serbia.png"
    },
    {
        name: "United Kingdom",
        capital: "London",
        alpha3Code: "GBR",
        population: 65,
        flag: "./assets/images/flag/UnitedKingdom.png"
    },
    {
        name: "United States",
        capital: "Washington D.C",
        alpha3Code: "USA",
        population: 323,
        flag: "./assets/images/flag/UnitedStates.png"
    },
    {
        name: "Russia",
        capital: "Moscow",
        alpha3Code: "RUS",
        population: 146,
        flag: "./assets/images/flag/Russia.png"
    },
    {
        name: "China",
        capital: "Beijing",
        alpha3Code: "CHN",
        population: 1377,
        flag: "./assets/images/flag/China.png"
    },
    {
        name: "India",
        capital: "New Delhi",
        alpha3Code: "IND",
        population: 1295,
        flag: "./assets/images/flag/India.png"
    }
];