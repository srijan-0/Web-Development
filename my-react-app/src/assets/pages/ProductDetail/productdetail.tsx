import React, { FormEvent, useState,useEffect} from 'react';
import "../search/search.css";
import Footer from '../../../component/Footer';
import NavBar from '../../../component/NavBar';
import axios from 'axios';
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';



interface HomepageProps {
    navbarImageSrc: string; // renamed to navbarImageSrc for clarity
    aboutusSrc: string;
    
   
}


const ProductDetail: React.FC<HomepageProps> = ({ navbarImageSrc }) => {

    const [items, setItems] = useState([]);
    const {id}= useParams();


    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8082/item/getAll');
            // console.log('Response data:', response.data); // Log the entire response data
    
            // // Iterate over the response data array and log the id of each item
            // response.data.forEach((p:any) => {
            //     console.log('Item ID:', p.id);
            // });
    
            // Filter the response data based on the provided id
            const selectProduct = response.data.find((p:any) => p.id == id);
            // console.log('Selected product:', selectProduct); // Log the selected product
            
            if (selectProduct) {
                setItems([selectProduct]);
            } else {
                console.log('Product not found for id:', id);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    console.log('ID from URL:', id);
    
    
    return (
        <div>
           <NavBar brandName="Shrestha Nepali Kagaj" imageSrcPath={navbarImageSrc} /> 
           <Container className='contain-1'>
           
           {items.map((items: any) => (
      
      <div className=' mx-3 mt-5 p-3 row' key={items.id}>
          
        
          
          <div className='col-4 border-box me-5'><img  src={`data:image/jpeg;base64,${items.itemImage}`} className='w-100 m-0 mt-2'></img>
          <p style={{ marginBottom: '10px', fontSize: '26px' }} className='item-name pt-3 fs-5 text-center' >{items.itemName}</p>
          </div>
          <div className='col-7 ms-5'><p style={{ marginBottom: '30px', fontSize: '35px' }} className='item-name pt-3 text-center ' >Description</p>
          <p style={{ marginBottom: '40px', fontSize: '20px' }}>{items.itemDescription}</p>
          <p style={{ marginBottom: '10px', fontSize: '26px' }}>Price : Rs {items.itemPerPrice}</p>
          </div>
          
         

      </div>
  ))}
       </Container>
        <Footer brandName="Shrestha Nepali Kagaj" imageSrcPath={navbarImageSrc}/>
       
        </div>
    );
};

export default ProductDetail;
