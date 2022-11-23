import React from "react";
import "./styles.css";
import Weather from "./components/Weather";
import { Provider } from "react-redux";
// import Report from "./components/Report";
import WeatherStore from "./redux/Store";
const App = () => {
  return (
    <Provider store={WeatherStore}>
      <div className="App">
        <Weather />
        {/* <Report /> */}
      </div>
    </Provider>
  );
};

export default App;
