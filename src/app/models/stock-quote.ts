export interface StockQuote {
  symbol: string;
  name: string;
  current: number;
  dayHigh: number;
  dayLow: number;
  week52High: number;
  week52Low: number;
  previousClose: number;
}
