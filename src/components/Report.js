import React from 'react'
import moment from "moment";
import "react-toastify/dist/ReactToastify.css";

const Report = (props) => {

  const mai =props.main;
  return (
    <div className="container">
    <div className="info">
            <div className="sub-heading">
              Weather Forecast <div>on</div>
            </div>
            <small className="date">
              {props.success ? moment().format("MMM DD YYYY") : null}
            </small>
            <div className="location">
              {props.success ? props.name : null}
              <small>({props.success ? props.sys.country : null})</small>
            </div>
            <div className="forecast-info">
              <div className="forecast-icon">
                {props.success ? (
                  <img
                    src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`}
                    alt=""
                  />
                ) : null}
              </div>
              <div className="forecast-value">
                <div className="degrees">
                  <span className="degrees-count">
                    {props.success ? props.main.temp : null}
                  </span>
                  C
                </div>
                <span className="weather-condition">
                  {props.success ? props.weather[0].mai : null}
                </span>
              </div>
            </div>
            <div className="additional-info">
              <ul className="list">
                <li>
                  <b>Feels Like</b> {props.success ? mai.feels_like : null}
                </li>
                <li>
                  <b>Min Temp</b> {props.success ? mai.temp_min : null}
                </li>
                <li>
                  <b>Max Temp</b> {props.success ? mai.temp_max : null}
                </li>
                <li>
                  <b>Pressure</b> {props.success ? mai.pressure : null}
                </li>
                <li>
                  <b>Humidity</b> {props.success ? mai.humidity : null}
                </li>
              </ul>
            </div>
          </div>
          </div>
  )
}

export default Report;
