import React, {FC} from 'react';
import useStyles from './styles'
import {PlaceDetailsType} from '../../types'
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'

interface PlaceDetailsProps {
    place: PlaceDetailsType
}

const PlaceDetails: FC<PlaceDetailsProps> = ({place}) => {
    console.log(place)
    const classes = useStyles()
    return (
        <div>
            <h1>{place.name}</h1>
        </div>
    );
};

export default PlaceDetails;
