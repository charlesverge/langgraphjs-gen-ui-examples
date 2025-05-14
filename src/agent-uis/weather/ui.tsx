import "./styles.css";


type WeatherConditions = {
    temperature: string;
    conditions: string;
    humidity: string;
    wind_speed: string;
};

type Props = {
    city: string;
    weather: WeatherConditions;
}

export default function WeatherComponent(props: Props) {
    const {
        city,
        weather: {
            temperature,
            conditions,
            humidity,
            wind_speed
        }
    } = props;
    return <div className="bg-red-500">
        WeatherComponent:<br />
        Weather for {city}<br />
        Temperature: {temperature}<br />
        conditions: {conditions}<br />
        humidity: {humidity}<br />
        wind_speed: {wind_speed}<br />
    </div>;
};
