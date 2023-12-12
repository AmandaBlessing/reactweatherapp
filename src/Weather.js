import React, {useState} from "react";
import axios from "axios";
import "./Weather.css"


export default function Weather() {
    const [ready, setReady] = useState(false);
    const [temperature, setTemperature] = useState(null);
    function handleResponse(response) {
        console.log(response.data)
        setTemperature(response.data.main.temp);
        setReady(true);
    
    }
    if (ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="search" className="btn btn-primary w-100" />
                        </div>
                    </div>
                </form>
                <h1> Johannesburg</h1>
                <ul>
                    <li>Wednesday 07:00</li>
                    <li>Mostly Cloudy</li>
                </ul>
                <div className="row">
                    <div className="col-6">
                        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Clodly" />
                        <span className="temperature">{Math.round(temperature)}</span>
                        <span className="unit">°C</span>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Precipitation: 0%</li>
                            <li>Humidity: 77%</li>
                            <li>Wind: 11 km/h</li>
                        </ul>

                    </div>

                </div>
            </div>
        );
    } else {
        let city = "Johannesburg";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ca10b48311741e5413970601d336b602`;
        axios.get(url).then(handleResponse);

        return "loading..."

        
    }
        
}