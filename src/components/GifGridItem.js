import React from 'react'
// recibir la imagen con sus datos 
export const  GifGridItem = ({ title, url}) =>{
  //  console.log(id, title, url);
// mostrar la imagen
    return(
        <div className="card animate__animated animate__rubberBand">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
} 

