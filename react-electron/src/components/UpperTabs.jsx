import * as React from 'react';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DataGridDemo from './DataGrid.jsx';
import ResBoxContainer from './ResBoxContainer.jsx';
import { Button } from '@mui/material';

window.electron.ipcRenderer.invoke('get-module', 'electron').then((someModule) => {
  if (someModule) {
    console.log(someModule);
  }
}).catch((error) => {
  console.error('Errore nel caricare il modulo:', error);
});

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function UpperTabs() {
  const [value, setValue] = React.useState(0);
  const [result, setResult] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    window.electron.ipcRenderer.invoke('comm-python').then((result) => {
      setResult(result);
    });
  }
  
  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          backgroundColor: 'white',
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Resizable Div" {...a11yProps(0)} />
          <Tab label="Data Grid EX" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ResBoxContainer />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <DataGridDemo />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Button variant="contained" onClick={handleClick}>
          Use python program
        </Button>
        <p>{result}</p>
      </CustomTabPanel>
    </Box>
  );
}