import React, { useEffect, useState } from 'react';
import Sidebar from "./adminslidebar";
import "../admin/createpaint.css"
import axios from 'axios';
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Contact from 'react-bootstrap/esm/Contact';
// import { Trash, Trash2 } from 'react-feather';

function GetContact() {
   
    const [contacts, setContact] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8082/Contact/getAll');
            setContact(response.data);
          
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    

   

    const handleDelete = async (id: any) => {
        try {
            await axios.delete(`http://localhost:8082/Contact/deleteById/${id}`);
            setContact(contacts.filter(Contact => Contact.id!== id));
            toast.success('Contact deleted successfully');
        } catch (error) {
            console.error('Error deleting Contact:', error);
            toast.error('Failed to delete Contact');
        }
    };
   

    return (
        <div style={{display:'flex'}}>
            <div className="">
                <Sidebar />
            </div>
            <div className=" text-3xl ml-8 w-full">
                <h2 className="font-semibold text-center mb-8 mt-8 ">ALL Contact</h2>

                <div className='itemstbl w-full mt-5 ms-5'>
                    <table className="neumorphic w-full">
                        <thead>
                            <tr>
                                <th className='font-medium'>ID</th>
                                <th className='font-medium'>Customer Name</th>
                                <th className='font-medium'>Phone Number</th>
                                <th className='font-medium'>Customer Email</th>
                                <th className='font-medium'>Customer Address</th>
                                <th className='font-medium'>Subject</th>
                                <th className='font-medium'>Message</th>

                            </tr>
                        </thead>
                        <tbody>
                        {contacts.map((contact: any) => (
    <tr key={contact.id}>
        <td>{contact.id}</td>
        <td>{contact.userName}</td>
        <td>{contact.userPhone}</td>
        <td>{contact.userEmail}</td>
        <td>{contact.userAddress}</td>
        <td>{contact.userSubject}</td>
        <td>{contact.userMessage}</td>
        <td>
            <button className='button3 rounded-2xl' onClick={() => handleDelete(contact.id)}>Delete</button>
        </td>
    </tr>
))}
                        </tbody>
                    </table>
                </div>


                <ToastContainer autoClose={1000} />
            </div>
        </div >

    );
};

export default GetContact;




