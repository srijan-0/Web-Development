import React, { useState } from 'react';
import NavBar from '../../../component/NavBar';
import Footer from '../../../component/Footer';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Form, Button } from "react-bootstrap";
import "../contact/contact.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

interface HomepageProps {
   
    navbarImageSrc: string; // renamed to navbarImageSrc for clarity
    aboutusSrc: string;
    
   
}

function ContactUs({navbarImageSrc}: HomepageProps){
    const [formData, setFormData] = useState({
        userName: '',
        userPhone: '',
        userEmail: '',
        userAddress: '',
        userSubject: '',
        userMessage: ''
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
            const response = await axios.post('http://localhost:8082/Contact/save', formData);
            console.log('Contact submitted successfully:', response.data);
            toast.success('Contact sent successfully!');
            // Handle success, e.g., show a success message to the user
            setFormData({
                userName: '',
                 userPhone: '',
                userEmail: '',
                userAddress: '',
                userSubject: '',
                userMessage: ''
            });
        } catch (error) {
            console.error('Error submitting Contact:', error);
            toast.error('Error submitting Contact');
            // Handle error, e.g., show an error message to the user
        }
    };
    return (
        <div>
            <NavBar brandName="Shrestha Nepali Kagaj" imageSrcPath={navbarImageSrc} />
            <div className="contactus">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 pb-4">
                            <h1 className="contactus-title py-4 fs-2 label-font">CONTACT US</h1>
                            <Form onSubmit={handleSubmit}>
    <Row className="mb-4">
        <Form.Label className="label-font">Full Name *</Form.Label>
        <Form.Control className="input-font" required name="userName" type="text" placeholder="Full Name" value={formData.userName} onChange={handleChange}/>
    </Row>
    <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridPhoneNUmber">
            <Form.Label className="label-font">Phone Number *</Form.Label>
            <Form.Control  pattern="[0-9]*" className="input-font" name="userPhone" required type="Number" placeholder="Phone Number" value={formData.userPhone} onChange={handleChange}/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="label-font">Email *</Form.Label>
            <Form.Control className="input-font" name="userEmail" required type="email" placeholder="Email" value={formData.userEmail} onChange={handleChange} />
        </Form.Group>
    </Row>
    <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridAddress">
            <Form.Label className="label-font">Address *</Form.Label>
            <Form.Control className="input-font" name="userAddress" required type="text" placeholder="Address" value={formData.userAddress} onChange={handleChange} />
        </Form.Group>
    </Row>
    <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridSubject">
            <Form.Label className="label-font">Subject *</Form.Label>
            <Form.Control className="input-font" name="userSubject" required type="text" placeholder="Subject" value={formData.userSubject} onChange={handleChange}/>
        </Form.Group>
    </Row>
    <Form.Group className="mb-4" controlId="formGridComment">
        <Form.Label className="label-font">Message *</Form.Label>
        <Form.Control className="input-font" name="userMessage" required as="textarea" placeholder="Leave a message here" style={{ height: "100px" }} value={formData.userMessage} onChange={handleChange}/>
    </Form.Group>
    <div className="d-flex justify-content-end">
        <Button className="label-font send-btn px-4" variant="success" type="submit">Send</Button>
    </div>
</Form>
<ToastContainer autoClose={1000} />
                            {/* <ToastContainer autoClose={1000} /> */}
                        </div>
                        {/* <div className="col-md-6 py-4 px-0 px-lg-4">

                            <iframe
                                className="map-iframe img-fluid"
                                title="mapFrame"
                                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3533.638758948051!2d85.2657052!3d27.666646099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2C%2044600!3m2!1d27.7172453!2d85.3239605!4m5!1s0x399534029d3cc243%3A0xfdeff855ca537c8!2sAarughat%2C%20Gorkha!3m2!1d28.0473353!2d84.8136609!5e0!3m2!1sen!2snp!4v1669870951020!5m2!1sen!2snp"
                                width="600"
                                height="1500"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>

                        </div> */}
                        <div className=" col-md-6 py-4 px-0 px-lg-4">
                <iframe
                  className=" "
                  title="mapFrame"
                  // onLoad={handleIFrame}
                  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3533.638758948051!2d85.2657052!3d27.666646099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2C%2044600!3m2!1d27.7172453!2d85.3239605!4m5!1s0x399534029d3cc243%3A0xfdeff855ca537c8!2sAarughat%2C%20Gorkha!3m2!1d28.0473353!2d84.8136609!5e0!3m2!1sen!2snp!4v1669870951020!5m2!1sen!2snp"
                  width="600"
                  height="450"
                //   allowFullScreen=""
                  // loading="lazy"
                  // referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
                        
                    </div>
                </div>
            </div>
            <Footer brandName="Shrestha Nepali Kagaj" imageSrcPath={navbarImageSrc}/>
        </div>
    );
}

export default ContactUs;
