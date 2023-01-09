export interface ShortUrl {
    id: number;     // primary key
    short: string;  // unique index
    long: string;   // unique index
}