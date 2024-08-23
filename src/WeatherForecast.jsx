import './WeatherForecast.css';

function WeatherForecast(props) {
    return ( 
        <section className="weather">
            {props.weatherForecasts.map((forecast) => (
                <div key={forecast._id}>
                    <h2>{forecast.day}</h2>
                    <img src={forecast.img} alt={forecast.imgAlt} />
                    <p><span>Conditions: </span>{forecast.conditions}</p>
                    <p><span>Time: </span>{forecast.time}</p>
                </div>
            ))}
        </section>
    );
}
export default WeatherForecast