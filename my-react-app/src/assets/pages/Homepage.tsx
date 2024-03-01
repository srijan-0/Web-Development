import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';


import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from 'axios';
import { Navigation, Autoplay} from 'swiper/modules';

import NavBar from '../../component/NavBar';
import Footer from '../../component/Footer';










interface HomepageProps {
    bottomImageSrc: string;
    navbarImageSrc: string; // renamed to navbarImageSrc for clarity
    aboutusSrc: string;
    
   
}

function Homepage({ bottomImageSrc, navbarImageSrc, aboutusSrc}: HomepageProps) {
    const [feedbackData, setFeedbackData] = useState([]);

    useEffect(() => {
        const fetchFeedbackData = async () => {
            try {
                const response = await axios.get('http://localhost:8082/Feedback/getAll');
                setFeedbackData(response.data);
            } catch (error) {
                console.error('Error fetching feedback data:', error);
            }
        };

        fetchFeedbackData();
    }, []);
    
    return (
        <div>
            <NavBar brandName="Shrestha Nepali Kagaj" imageSrcPath={navbarImageSrc} />
            
            <div className="d-flex ms-4">
                <img
                    src={bottomImageSrc}
                    width="1470"
                    height="580"
                    className="me-2 mb-1 mt-3"
                    alt=""
                />
            </div>
            
            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-md-6">
                        <div className="d-flex justify-content-center">
                            <img
                                src={aboutusSrc}
                                width="500"
                                height="400"
                                className="me-2 mb-1 mt-3"
                                alt="About Us"
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-start mt-3">
                            <h3 className='about '>ABOUT US</h3>
                            <p className='Para1'>
                            Nepali Kagaj, established in 1990 AD, is a renowned manufacturer of handmade paper products
                            based in Aarughat, Gorkha, Nepal. Our paper-making process follows the traditional Japanese
                            method, ensuring the highest quality and authenticity in our products.
                            </p>

                            <p className='Para1'>
                            At Nepali Kagaj, we take pride in crafting handmade paper products that showcase the rich 
                            cultural heritage of Nepal. Our skilled artisans meticulously create each piece, blending 
                            traditional techniques with modern design aesthetics to produce unique and exquisite items.
                            </p>
                            <p className='Para1'>
                            Located amidst the serene landscapes of Aarughat, our workshop is nestled in the heart of Nepal,
                             where we draw inspiration from nature's beauty to create sustainable and eco-friendly paper products.
                            </p>
                            <p className='Para1'>
                            With a commitment to preserving Nepali craftsmanship and promoting sustainable practices, Nepali Kagaj
                             continues to be a symbol of excellence in handmade paper production, serving customers worldwide with
                              our distinctive and environmentally conscious creations.
                            </p>
                        </div>
                    </div>
                    <div className="feedback-container mt-5">
             <div className='d-flex justify-content-center mt-5'><h4>WHAT PEOPLE THINK ABOUT US?</h4></div>
            <section className="feedback-section mt-5">
            <Swiper  autoplay={{ delay: 6000 }} navigation={true} modules={[Navigation,Autoplay]} className="mySwiper">
                    {feedbackData.map((slide: any, index: number) => (
                        <SwiperSlide key={index}>
                            <div className="name mb-5 mt-3 ms-5 me-5"><b>{slide.userName}</b></div>
                            <div className="message ms-5 me-5">{slide.userFeedback}</div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
            </section>
          
            <div className='d-flex justify-content-center'><Link to="/feedback"><button className="button1 mb-4 mt-5 text-center">Give Feedback</button></Link></div>
            
        </div>


                </div>
            </div>
            <Footer brandName="Shrestha Nepali Kagaj" imageSrcPath={navbarImageSrc} />
        </div>
    );
}

export default Homepage;

