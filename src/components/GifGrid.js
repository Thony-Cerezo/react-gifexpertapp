import React from 'react';// { useState, useEffect}
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) =>{

    const {data: images, loading} = useFetchGifs(category);// lo que se pone entre parentesis se manda en la fincion 

   
    
    // const [images, setImages] = useState([]);
    // // a este se le manda una lista de dependencias 
    // useEffect(() =>{
    //     getGifs(category)
    //     .then(setImages);
    // }, [category])
    // traer las imagenes de una api
    

// mandar llamar la funcion 
//getGifs();   
    return( 
        <>
        <h3 className='animate__animated animate__rubberBand'>{category}</h3>

        {loading && <p>Loading</p>}  
      <div className="card-grid">
          
              {/* //  llamar las imagenes.... el && le pregunta a la funcion si es true evalua el loading si es falso no hace nada*/}
               {
                   images.map(img =>(
                  <GifGridItem 
                  key ={img.id}
                  {...img}/>
                   ))
               }
          
        </div> 
        </>
    )
}