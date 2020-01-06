import React from 'react';
import './App.css';
import {IntlProvider} from "react-intl";

import Clock from "./components/Clock";
import {allMessages} from "./messages"

function App() {
  const currentLocale = "en"

  return (
    <div className="App">
      <IntlProvider locale={currentLocale} messages={allMessages[currentLocale]} >
        <Clock />
      </IntlProvider>
    </div>
  );
}

export default App;
