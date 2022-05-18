import {useEffect, useState} from 'react'
/* import Item from '../Item/Item' */
import ItemList from '../ItemList/ItemList'
import { catalogo } from '../../Config'
import { useParams } from 'react-router-dom'
/* import ItemDetail from '../ItemDetail/ItemDetail' */
/* import { useParams } from 'react-router-dom' */

const ItemListContainer = () => {


  const [productos,setProductos] = useState([])

  const{categoryId} = useParams()
  const group = catalogo.filter((prod)=>prod.categoryId === (categoryId))


useEffect(() => {
  const pedido = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(categoryId ? group : catalogo)
    }, 2000);
  });

  pedido.then((res) => setProductos(res))
  .then(()=>console.log(productos))
  .catch((err)=>console.log(err))

  console.log(pedido);

  return () => {
    
  }
}, [categoryId])

return (
    <div className='bg-info'>ItemListContainer

        <p></p>
        <div className="d-flex justify-content-evenly flex-wrap p-4">
          <ItemList productos={productos}/>
        </div>

    </div>
  )
}

export default ItemListContainer