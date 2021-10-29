import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Thumb from '../Thumb/Thumb';

// hooks 
import { useHomeFetch } from '../../Hooks/useHomeFetch';
import { grid } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function GridMaterial() {

    const {loading ,error, state} = useHomeFetch();
    const gridProducts = state.products.slice(2, 4);
    console.log(gridProducts);
    return (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>

            </Grid>
            <Grid item xs={4}>

            </Grid>
            <Grid item xs={4}>

            </Grid>
            <Grid item xs={6}>

            </Grid>
          </Grid>
        </Box>
    );    
}   