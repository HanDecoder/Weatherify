

export class Weather {

    base?: string;
    name?: string;
    weather: [
        {
            id: number,
            main: string,
            description: string,
            icon: string
        }
    ];
    wind?: {speed: number, deg: number, gust: number};
    clouds?: {all: number};
    id?: number;
    main?: {temp: number, humidity: number, pressure: number, feels_like: number};
    timezone?: number;
    cod?: number;
    sys?: {country: string, sunrise: number, utc_sunrise: string, sunset: number, utc_sunset: string};
    temp?: number;

}