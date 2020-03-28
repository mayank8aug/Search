import React from 'react';
import SearchContainer from './components/Search/SearchContainer';
import WidgetContainer from './components/Widgets/WidgetContainer';
import './Common.css';

const App = () => {
  return (
    <div className="app-container">
      <SearchContainer />
      <WidgetContainer />
    </div>
  )
}

export default App;