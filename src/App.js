import './App.css';
import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';


function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [data, setData] = useState([]); //in the form of array

  const addData = () => {
    setData([...data, { name, number }])
    setName("");
    setNumber("");
  }
  const removeData = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }

  return (
    <div className="App">
      <div className='header'>
        <h2>My Contact List</h2>
        <ContactPhoneIcon />
      </div>
      <Stack spacing={2} direction="row" >
        <TextField
          value={name}
          onChange={(event) => setName(event.target.value)}
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <TextField
          
          value={number}
          type="number"
          onChange={(event) => setNumber(event.target.value)}
          id="outlined-basic"
          label="Number"
          variant="outlined"
        />
        <Button
          onClick={addData}
          color='success'
          variant="contained">
          <AddIcon />
        </Button>
      </Stack>

      <div className='contact-details'>
        <h4>Name</h4>
        <h4>Contact no.</h4>
        <h4>Delete</h4>
      </div>

      {
        data.map((element, index) => {
          return (
            <div key={index} className='contact-details'>
              <h4>{element.name}</h4>
              <h4>{element.number}</h4>
              <Stack>
                <Button
                  onClick={() => removeData(index)}
                  color='error'
                  variant="contained">
                  <DeleteIcon />
                </Button>
              </Stack>

            </div>
          )
        })
      }

    </div>
  );


}

export default App;