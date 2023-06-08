import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Heading from './components/Heading';
import './App.css';
import About from './components/About';

function App() {
  return (
    <div className="app-container">
      <Tabs align='end' isFitted variant='enclosed' className="tabs-container">
        <TabList className="tab-list">
          <Heading className="heading" />
          <Tab className="tab">About</Tab>
          <Tab className="tab">Courses</Tab>
          <Tab className="tab">Galleries</Tab>
          <Tab className="tab">Testimonies</Tab>
          <Tab className="tab">Contact</Tab>
        </TabList>
        <TabPanels className="tab-panels">
          <TabPanel className="tab-panel">
            <About />
          </TabPanel>
          <TabPanel className="tab-panel">
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
