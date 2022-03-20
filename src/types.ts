export type ApiOptionsType = {
    params: {
        bl_latitude: string
        tr_latitude: string
        bl_longitude: string
        tr_longitude: string
    },
    headers: {
        'x-rapidapi-host': string
        'x-rapidapi-key': any
    }
}

export type LatLngType = {
    lat: number
    lng: number
}

export type PlaceDetailsType = {
    name: string
    photo: any
    price_level: string
    ranking: string
    awards?: any[]
    cuisine: any[]
    address: string
    phone: string
    web_url: string
    website: string
}
