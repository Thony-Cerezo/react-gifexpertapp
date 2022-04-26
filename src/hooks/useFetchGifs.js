import { useEffect, useState } from "react";
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) =>{// en este caso se esta recibiendo la category de GifGrid

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // usar efectps
    // los efectos no pueden ser asynk
    useEffect(() =>{
        getGifs(category)
        .then(imgs =>{

            setTimeout(() => {
            setState({
                data: imgs,
                loading: false
            });
            }, 3000);
        });
    },[category]);


    

    return state;
}