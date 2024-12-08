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
    <div className="App" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <SideBar />
      <div style={{ marginLeft: 240, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <TopNavbar />
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', zIndex: 1, position: 'sticky', top: 0, backgroundColor: 'white' }}>
            <PageDescription />
            <TabButtons onTabChange={handleTabChange} />
          </div>
          <div style={{ flex: 1, overflowY: 'auto', maxHeight: 'calc(100vh - 150px)' }}>
            <CardContainer tabValue={tabValue} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
