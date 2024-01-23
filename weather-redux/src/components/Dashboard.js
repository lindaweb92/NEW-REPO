import React from "react";
import '../styles/Dashboard.css';
import { getLocalStorageItem } from "../utils";
import { LOCAL_STORAGE_KEY_WELCOME_MODAL } from "../utils/constants";
import { useWeather } from "../providers/weatherContext";
import AirPollutionWidget from "./widgets/AirPollutionWidget";
import AdditionalWidget from "./widgets/AdditionalWidget";
import CurrentWidget from "./widgets/CurrentWidget";
import DailyWidget from "./widgets/DailyWidget";
import Notification from "./Notification";
import Search from "./Search";
import Modal from "./Modal";

//componente React
const Dashboard = () => {
  const {
    modal, //rappresenta lo stato del modal
    hideModal, //nasconde il modal
    weatherData, //Dati meteorologici ottenuti dal servizio
    error, //errore nel recupero dei dati 
    hideError, //nasconde l'errore
    info, // messaggio informativo
    setInfo // imposta il messaggio informativo
  } = useWeather(); //Dichiarazione delle variabili di stato

//Mostra una notifica di errore se ci sono errori sia nei dati meteorologici che nell'errore di stato
  const renderErrorIfAny = () => {
    if ((weatherData && weatherData.error) || error) {
      let withError = error;
      if (weatherData && weatherData.error) {
        withError = weatherData.error;
      }
      return <Notification message={withError} hideNotification={hideError} type="error" />
    }
  }

//Mostra una notifica informativa se è presente un messaggio informativo
  const renderNotificationIfAny = () => {
    if (info) {
      return <Notification message={info} hideNotification={() => setInfo(undefined)} type="info" />
    }
  }

//Mostra un modal di benvenuto
  const renderModalIfNeeded = () => {
    if (!modal) {
      return;
    }

    const welcomeModal = getLocalStorageItem(LOCAL_STORAGE_KEY_WELCOME_MODAL);
    if (!welcomeModal) {
      return <Modal hideModal={hideModal} />
    }
  };

  return (
    <div className="main-container" data-testid="main-container">
      <div className="main-wrapper">
        <div className="main-content">
          <div className="main-title">
            <Search />
            <div className="title">
              <h1>WeatherApp</h1>
            </div>
          </div>
          {/* Meteo 5 giorni */}
          <DailyWidget />
          <h3 className="widget-title">Altri dati da OpenWeather</h3>
          <div className="flex-wrapper">
            {/* Sys */}
            <div className="flex-item widget">
              <AdditionalWidget />
            </div>
            {/* Qualità aria */}
            <div className="flex-item widget">
              <AirPollutionWidget />
            </div>
          </div>
        </div>
        {/* Meteo corrente */}
        <div className="detail-content">
          <CurrentWidget />
        </div>
      </div>

      { renderErrorIfAny() }
      { renderModalIfNeeded() }
      { renderNotificationIfAny() }

    </div>
  )
}

export default Dashboard;