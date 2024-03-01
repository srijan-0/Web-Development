import React, { useEffect, useState } from 'react';
import Sidebar from "../admin/adminslidebar";
import "../admin/createpaint.css"
import axios from 'axios';
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
// import { register } from 'swiper/element';

function CreateCardForm() {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("accessToken")) {
            //   alert('PLEASE LOGIN')
            navigate('/adminlogin', { replace: true })
        }
    }, [])

    const apiCall = useMutation({
    mutationKey: ["POST_ITEM"],
    mutationFn: async (formData) => {
        try {
            const response = await axios.post('http://localhost:8082/item/save', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
                },
            });
            return response.data;
        } catch (error) {
            console.error("API call error:", error.message);
            // Handle the error here, for example, show a toast notification
            toast.error(`Error: ${error.message}`);
            // Return null or undefined to signify that the mutation failed
            return null;
        }
    },
    onError: (error) => {
        // This callback will be invoked if an error occurs during the mutation call
        console.error("Mutation error:", error);
        toast.error(`Error: ${error.message}`);
    },
});

    const { register, handleSubmit } = useForm({
        // values: id_p ? dataById?.data : {},
    });
    const onSubmit = (data, e) => {
        const formData = new FormData();
        formData.append('itemName', data.itemName);
        formData.append('itemDescription', data.itemDescription);
        formData.append('itemQuantity', data.itemQuantity);
        formData.append('itemPerPrice', data.itemPerPrice);
        formData.append('itemImage', data.itemImage[0]); // Assuming itemImage is a file input
        // formData.append('brandName', data.brandName);
        
        if (Object.values(data).some((value) => !value)) {
            toast.error('Please fill all the fields!');
            // } else if (!data.brandName) {
            //     toast.error('Please select a brand!');
        } else {
            apiCall.mutate(formData);
            toast.success('Product added successfully!');
            // e.target.reset();
        }
    };
    return (
        <div className="hjgf" style={{display:'flex'}}>
            <div className="">
                <Sidebar />
            </div>
            <div className="abc text-3xl ml-8">
                <h2 className="font-semibold text-center mb-8 mt-8">ADD PRODUCT</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-11">
    <div className="mb-2">
        <input className="input5 mr-1" type="text" placeholder="TITLE" {...register("itemName")} />
    </div>
    <div className="mb-2">
        <input className="input5 mr-1" type="textarea" placeholder="DETAIL" {...register("itemDescription")} />
    </div>
    <div className="mb-2">
        <input className="input5 max-w-80 mr-1" type="file" accept="image/*" required {...register("itemImage")} />
    </div>
    <div className="mb-2">
        <input className="input5 mr-1" {...register("itemQuantity")} type="text" placeholder="QUANTITY" />
    </div>
    <div className="mb-2">
        <input className="input5 mr-1" {...register("itemPerPrice")} type="text" placeholder="PER-PRICE" />
    </div>
    <button
        type="submit"
        className="relative overflow-hidden ms-4 ml-4 z-10 inline-flex items-center justify-center w-56 h-26 rounded-full shadow-md font-medium text-base text-center text-white bg-gradient-to-r from-green-400 to-yellow-400 focus:outline-none transition-all duration-500 ease-in-out hover:w-36 hover:bg-yellow-400"
        onClick={() => console.log('Button clicked!')}
    > ADD</button>
</div>


                </form>
                <ToastContainer autoClose={1000} />
            </div>
        </div>

    );
};

export default CreateCardForm;