import {Grid, Paper, Select, Button, MenuItem, Slider, Container, Typography, InputLabel
FormControl } from '@material-ui/core';
import React from 'react';



function Main(props) {
    return (
        <div>
      <Container>
          <Paper>
            <Typography variant="h1" className="class.mainTitle">
                Make Your Selections:
            </Typography>
            <form onSubmit={handleSubmit}></form>



          </Paper>
        </Container>      









            
        </div>
    );
}

export default Main;