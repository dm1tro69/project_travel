import React, {FC, useEffect, useState} from 'react';
import {CssBaseline, Grid} from "@material-ui/core";

import {getPlacesData} from './api'

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App: FC = () => {

    const [places, setPlaces] = useState([])
    const [coordinates, setCoordinates] = useState({lat: 37.97637, lng: 23.723433})
    const [bounds, setBounds] = useState({})

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        });
    }, []);

    useEffect(()=> {
        console.log(coordinates, bounds)
        // @ts-ignore
        getPlacesData(bounds.sw, bounds.ne)
            .then((data)=>{
                console.log(data)
                setPlaces(data)
            })
    }, [coordinates, bounds])


    return (
        <>
            <CssBaseline/>
          <Header/>
            <Grid container spacing={3} style={{width: '100%'}}>
               <Grid item xs={12} md={4}>
                   <List places={places}/>
               </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        // @ts-ignore
                        coordinates={coordinates}
                    />
                </Grid>
            </Grid>

        </>
    );
};

export default App;
