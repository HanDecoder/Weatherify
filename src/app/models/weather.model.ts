

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
    ]

    id?: number;
    main?: {temp: number, humidity: number, pressure: number};
    timezone?: number;
    cod?: number;
    sys: {country: string, sunrise: number, sunset: number};
    temp: number;
}