import React, { useState } from 'react';
import { Overlay } from './ServiceForm.style';
import { Container } from '../user-profile/UserProfile.styled';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import { Title } from '../user-profile/UserProfile.styled';
import { Button } from '../user-profile/UserProfile.styled';
import TextField from '@mui/material/TextField';

const ServiceForm: React.FC<{ updateFields: any; onSubmit: any }> = ({ updateFields, onSubmit }) => {
  const [serviceName, setServiceName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [rate, setRate] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFields({ name: e.target.value });
    setServiceName(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFields({ description: e.target.value });
    setDescription(e.target.value);
  };

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    updateFields({ category: event.target.value });
    setCategory(event.target.value);
  };

  const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFields({ hourly_rate: e.target.value });
    setRate(e.target.value);
  };

  const handleSubmit = () => {
    alert('Service Submitted!');
    console.log();
    onSubmit && onSubmit();
  };

  return (
    <>
      <Overlay>
        <Container>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '100%' },
              '& .MuiInputBase-root': {
                color: 'white', // Text color
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white', // Outline color when inactive
                },
                '&:hover fieldset': {
                  borderColor: 'white', // Outline color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white', // Outline color when focused
                },
              },
              '& .MuiInputLabel-root': {
                color: 'white', // Label color
              },
              '& .MuiSelect-icon': {
                color: 'white', // Dropdown arrow color
              },
            }}
            noValidate
            autoComplete="off"
          >
            <Title>Create A Service Offer</Title>
            <TextField
              id="service_name"
              label="Name"
              variant="outlined"
              value={serviceName}
              onChange={handleNameChange}
              color="success"
              focused
              style={{marginTop: '1.5rem'}}
            />
            <TextField
              id="description"
              label="Description"
              variant="outlined"
              value={description}
              onChange={handleDescriptionChange}
              color="success"
              focused
              style={{marginTop: '1.5rem'}}
            />
            <FormControl fullWidth style={{marginTop: '1.5rem'}}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Category"
                onChange={handleCategoryChange}
                color="success"
              >
                <MenuItem value={'education'}>Education</MenuItem>
                <MenuItem value={'gardening'}>Gardening</MenuItem>
                <MenuItem value={'home-improvement'}>Home Improvement</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="hourly_rate"
              label="Rate (hourly)"
              variant="outlined"
              value={rate}
              onChange={handleRateChange}
              color="success"
              focused
              style={{marginTop: '1.5rem'}}
            />
          </Box>
          <Button onClick={handleSubmit}>
            <strong>Submit</strong>
          </Button>
        </Container>
      </Overlay>
    </>
  );
};

export default ServiceForm;
