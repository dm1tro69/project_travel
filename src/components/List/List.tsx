import React, {FC, useState} from 'react';
import useStyles from './styles'
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from '@material-ui/core'
import PlaceDetails from '../PlaceDetails/PlaceDetails'

interface ListProps {
    places: any[]
}

const List: FC<ListProps> = ({places}) => {
    console.log(places)
    const classes = useStyles()
    const [type, setType] = useState<string | unknown>('restorants')
    const [rating, setRating] = useState<string | unknown>(0)


    return (
        <div className={classes.container}>
            <Typography variant={'h4'}>
                Restaurants, Hotels & Attractions around you
            </Typography>
            <FormControl style={{marginRight: '25px'}} className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e)=> {setType(e.target.value)}}>
                     <MenuItem value={'restorants'}>Restorants</MenuItem>
                     <MenuItem value={'hotel'}>Hotels</MenuItem>
                     <MenuItem value={'attractions'}>Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e)=> {setRating(e.target.value)}}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i)=> (
                    <Grid item key={i} xs={12}>
                           <PlaceDetails place={place}/>
                    </Grid>
                    )
                )}
            </Grid>
        </div>
    );
};

export default List;
