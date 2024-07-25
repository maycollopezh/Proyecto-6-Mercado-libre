import axios from 'axios'
import { useState } from 'react'

const ItemsComponent = () => {

    const [itemsInfo, setItemsInfo] = useState();

    const API_URL = import.meta.env.VITE_API_URL

    const requestItems = async() => {
        try {
            
            // const response = await axios.get (`${API_URL}/items`);

            const response = await axios.get (`https://json-server-jwt-gin5.onrender.com/items`);

            setItemsInfo(response.data);

            console.log(response.data);

        } catch (error) {
            console.log('A ocurrido un error al solicitar la información de la API', error);
        }
    }

    return(
        <>
            <h1>Welcome To MARTEK LP</h1>

            <button onClick={requestItems}>Información de los productos</button>
        </>
    )    
}

export default ItemsComponent;