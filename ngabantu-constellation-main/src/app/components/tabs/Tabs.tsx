import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Title, Button } from '../user-profile/UserProfile.styled';
import ServiceForm from '../service-form/ServiceForm';
import { ServiceOffer } from '../../types/types';
import Map from './../maps/Map';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ display: 'flex', flexDirection: 'column' }}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const CenteredTabs: React.FC<{ updateFields: any; services: any }> = ({ updateFields, services }) => {
  const [value, setValue] = React.useState(0);
  const [showForm, setShowForm] = React.useState(false);
  const [newService, setNewService] = React.useState({});

  const apikey = 'aoNkxVlJv3ZwMoNyDS-6gNQ2EpbKkNFI9GmuXokqS7I';

  function updateService(fields: Partial<ServiceOffer>) {
    setNewService((prev) => {
      const update = { ...prev, ...fields };
      return update;
    });
  }

  function submitForm() {
    updateFields({ services: [...services, newService] });
    setShowForm(false);
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor='inherit'
          centered
        >
          <Tab
            label="Services"
            {...a11yProps(0)}
            value={0}
            sx={{ color: '#bdee63' }} // Custom text color
          />
          <Tab
            label="Requests"
            value={1}
            {...a11yProps(1)}
            sx={{ color: '#bdee63' }} // Custom text color
          />
          <Tab
            label="Support"
            value={2}
            {...a11yProps(2)}
            sx={{ color: '#bdee63' }} // Custom text color
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Map apikey={apikey} />
        {/* <Title style={{fontSize: '35'}}> You do not have any services on offer at the moment. </Title>
        <Button onClick={() => setShowForm((prev) => !prev)}><strong>Create Service</strong></Button>
        {showForm && <ServiceForm updateFields={updateService} onSubmit={submitForm} />} */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Requests
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Support
      </CustomTabPanel>
    </Box>
  );
}

export default CenteredTabs;