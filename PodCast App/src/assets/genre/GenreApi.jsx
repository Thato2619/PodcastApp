import React from 'react'
import genres from './genres';

import { useEffect, useState } from 'react'

export default function GenreApi(){

    const [podcast, setPodcast] = useState([null]);

    useEffect(() => {

        fetch('https://podcast-api.netlify.app/shows')
        .then(res => res.json())
        .then(data => setPodcast(data.genres))
        console.log(data)
        
    }, [])
    return(
        <></>
    )
}