
import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon ball'];
    const [categories, setCategories] = useState(['Yu gi oh']);
// agregar elementos a un arreglo
    // const handleAdd = () => {
    //         SetCategories(cats =>[...categories, 'Yugioh']);// regresa un nuevo arreglo
    // }
return(
    <div>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>
        
       {/* //para recorrer el arreglo  */}
       <ol>
      {
// necesitamos asignar un id unicoo a cada elemento por eso debemos agregar la key
 categories.map(category => (
    <GifGrid 
    key={category}
    category={category}/>
 )
)
      }
       </ol>
    </div>
)
}
