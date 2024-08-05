import axios from 'axios';
import { useState, useEffect } from 'react';
import '../App.css';  // Asegúrate de que este archivo esté importado

const ItemsComponent = () => {
    const [itemsInfo, setItemsInfo] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(12);

    const API_URL = import.meta.env.VITE_API_URL;

    const requestItems = async () => {
        try {
            const response = await axios.get(`https://json-server-jwt-gin5.onrender.com/items`);
            setItemsInfo(response.data);
        } catch (error) {
            console.log('Ocurrió un error al solicitar la información de la API', error);
        }
    };

    useEffect(() => {
        requestItems();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = itemsInfo.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container mt-5">
            <div className="row">
                {currentItems.map((item) => (
                    <div className="col-md-3 mb-4" key={item.id}>
                        <div className="card">
                            <img
                                src={item.image}
                                className="card-img-top product-img"
                                alt={item.title}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                                <a href="#" className="btn btn-primary">Comprar ahora</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination-container">
                <nav aria-label="Page navigation">
                    <ul className="pagination">
                        {Array.from({ length: Math.ceil(itemsInfo.length / itemsPerPage) }, (_, index) => (
                            <li className="page-item" key={index + 1}>
                                <a
                                    className="page-link"
                                    onClick={() => paginate(index + 1)}
                                    href="#!"
                                >
                                    {index + 1}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default ItemsComponent;
