import React, { FormEvent, useState,useEffect } from 'react';
import "../search/search.css";
import Footer from '../../../component/Footer';
import NavBar from '../../../component/NavBar';
import axios from 'axios';
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';



interface HomepageProps {
    navbarImageSrc: string; // renamed to navbarImageSrc for clarity
    aboutusSrc: string;
    
   
}


const Search: React.FC<HomepageProps> = ({ navbarImageSrc }) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8082/item/getAll');
            setItems(response.data);
            //   setItems(response.data.filter((item: any) => item.itemCategory === category));

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
    return (
        <div>
           <NavBar brandName="Shrestha Nepali Kagaj" imageSrcPath={navbarImageSrc} /> 
           <Container className='contain-1'>
           
       <div className='row text-center justify-content-center' >
       {items.map((items: any) => (
      
                                <div className='col-2 border-box mx-3 mt-5 p-3 ' key={items.id}>
                                     <Link to={`/search/${items.id}`}>
                                  
                                    
                                    <img  src={`data:image/jpeg;base64,${items.itemImage}`} className='w-100'></img>
                                    <p className='item-name pt-3 fs-5' >{items.itemName}</p>
                                    
                                   
                                    </Link>

                                </div>
                            ))}
       </div>
      
       </Container>
        <Footer brandName="Shrestha Nepali Kagaj" imageSrcPath={navbarImageSrc}/>
       
        </div>
    );
};

export default Search;
