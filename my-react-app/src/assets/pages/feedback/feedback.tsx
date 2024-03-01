import React, { useState } from 'react';
import axios from 'axios';
import "../feedback/feedback.css";
import NavBar from '../../../component/NavBar';
import Footer from '../../../component/Footer';
import { ToastContainer, toast } from 'react-toastify';



interface HomepageProps {
    navbarImageSrc: string; // renamed to navbarImageSrc for clarity
    aboutusSrc: string;

}

const FeedbackForm: React.FC<HomepageProps> = ({ navbarImageSrc }) => {
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        userFeedback: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:8082/Feedback/save', formData);
            console.log('Feedback submitted successfully:', response.data);
            toast.success('Feedback sent successfully!');
            // Handle success, e.g., show a success message to the user
            setFormData({
                userName: '',
                userEmail: '',
                userFeedback: ''
            });
        } catch (error) {
            console.error('Error submitting feedback:', error);
            toast.error('Error submitting feedback');
            // Handle error, e.g., show an error message to the user
        }
    };

    return (
        <>
         <NavBar brandName="Shrestha Nepali Kagaj" imageSrcPath={navbarImageSrc} />
         <div className="container2">
             <h1>Feedback Form</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="userName">Name:</label>
            <input type="text" id="userName" name="userName" value={formData.userName} onChange={handleChange} required />
            <label htmlFor="userEmail">Email:</label>
            <input type="email" id="userEmail" name="userEmail" value={formData.userEmail} onChange={handleChange} required />
            <label htmlFor="userFeedback">Feedback:</label>
            <textarea id="userFeedback" name="userFeedback" value={formData.userFeedback} onChange={handleChange} required/>
            <button type="submit">Submit Feedback</button>
        </form>
        <ToastContainer autoClose={1000} />
        </div>
        <Footer brandName="Shrestha Nepali Kagaj" imageSrcPath={navbarImageSrc}/>
        </>
    );
};

export default FeedbackForm;

