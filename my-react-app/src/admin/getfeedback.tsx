import React, { useEffect, useState } from 'react';
import Sidebar from "./adminslidebar";
import "../admin/createpaint.css"
import axios from 'axios';
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Feedback from 'react-bootstrap/esm/Feedback';
// import { Trash, Trash2 } from 'react-feather';

function GetFeedback() {
    const [visibleFeedbacks, setVisibleFeedbacks] = useState({});

    const handleShow = async (id) => {
        try {
            const response = await fetch(`http://localhost:8082/Feedback/${id}/show`, {
                method: 'PUT',
            });
            if (!response.ok) {
                throw new Error('Failed to update feedback');
            }
            setVisibleFeedbacks({
                ...visibleFeedbacks,
                [id]: !visibleFeedbacks[id]
            });
            toast.success('Feedback hide successfully');
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    };
   
    const [feedbacks, setFeedback] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8082/Feedback/getAll');
            setFeedback(response.data);
          
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    

   

    const handleDelete = async (id: any) => {
        try {
            await axios.delete(`http://localhost:8082/Feedback/deleteById/${id}`);
            setFeedback(feedbacks.filter(Feedback => Feedback.id!== id));
            toast.success('Feedback deleted successfully');
        } catch (error) {
            console.error('Error deleting Feedback:', error);
            toast.error('Failed to delete Feedback');
        }
    };
   

    return (
        <div style={{display:'flex'}}>
            <div className="">
                <Sidebar />
            </div>
            <div className=" text-3xl ml-8 w-full">
                <h2 className="font-semibold text-center mb-8 mt-8 ">ALL Feedback</h2>

                <div className='itemstbl w-full mt-5 ms-5'>
                    <table className="neumorphic w-full">
                        <thead>
                            <tr>
                                <th className='font-medium'>ID</th>
                                <th className='font-medium'>User Name</th>
                                <th className='font-medium'>User Email</th>
                                <th className='font-medium'>User Feedback</th>
                                <th className='font-medium'>Visible</th>
                                <th className='font-medium'>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                        {feedbacks.map((feedback: any) => (
    <tr key={feedback.id}>
        <td>{feedback.id}</td>
        <td>{feedback.userName}</td>
        <td>{feedback.userEmail}</td>
        <td>{feedback.userFeedback}</td>
        <td>
            <button className='button4 rounded-2xl' onClick={() => handleShow(feedback.id)}>
                {visibleFeedbacks[feedback.id] ? 'Hide' : 'Show'}
            </button>
        </td>
        <td>
            <button className='button3 rounded-2xl' onClick={() => handleDelete(feedback.id)}>Delete</button>
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

export default GetFeedback;




