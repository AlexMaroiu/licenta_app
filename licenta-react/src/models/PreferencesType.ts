export default interface PreferencesType {
    peratio: Characteristic;
    roe: Characteristic;
    roa: Characteristic;
    profitMargins: Characteristic;
    operatingMargins: Characteristic;
    ebitda: Characteristic;
    revenue: Characteristic;
    rps: Characteristic;
    grossProfit: Characteristic;
    revenueGrowth: Characteristic;
}

export interface Characteristic {
    min: number | null;
    max: number | null;
}
