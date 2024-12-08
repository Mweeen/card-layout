import React, { useState } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import TopNavbar from './components/TopNavbar';
import PageDescription from './components/PageDescription';
import TabButtons from './components/TabButtons';
import CardContainer from './components/CardContainer';

function App() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (value) => {
    setTabValue(value);
  };

  return (
    <div className="App d-flex flex-column h-100">
      <div className="App-content d-flex flex-grow-1">
        <SideBar />
        <div className="main-content d-flex flex-column flex-grow-1">
          <TopNavbar />
          <div className="d-flex flex-column flex-grow-1">
            <div className="d-flex flex-column sticky-top bg-white w-100">
              <PageDescription />
              <TabButtons onTabChange={handleTabChange} />
            </div>
            <div className="flex-grow-1 border border-secondary rounded w-100">
              <CardContainer tabValue={tabValue} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
