import React, {FC} from 'react';
import useStyles from './styles'
import GoogleMapReact from 'google-map-react'
import {Paper, Typography, useMediaQuery} from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab'
import {LatLngType} from '../../types'

interface MapProps {
    setCoordinates: {}
    setBounds: any
    coordinates: LatLngType
}

const Map: FC<MapProps> = ({setCoordinates, coordinates, setBounds}) => {
    const classes = useStyles()
    const isMobile = useMediaQuery('(min-width: 600px)')


    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                // @ts-ignore
                bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={{ disableDefaultUI: true, zoomControl: true }}
                onChange={(e)=>{
                    // @ts-ignore
                    setCoordinates({lat: e.center.lat, lng: e.center.lng})
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                }}
                onChildClick={()=>{}}
            >

            </GoogleMapReact>
        </div>
    );
};

export default Map;
