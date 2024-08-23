import './WeatherForecast.css';

function WeatherForecast(props) {
    return ( 
        <div className="weather">
            {props.weatherForecasts.map((forecast) => (
                <div key={forecast._id}>
                    <h2>{forecast.day}</h2>
                    <img src={forecast.img} alt={forecast.imgAlt} />
                    <p><span>Conditions: </span>{forecast.conditions}</p>
                    <p><span>Time: </span>{forecast.time}</p>
                </div>
            ))}
        </div>
    );
}
export default WeatherForecast