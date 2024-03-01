import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Homepage from "./assets/pages/Homepage";
import ContactUs from "./assets/pages/contact/contactus";
import imagePath1 from './assets/Nepali_Kagaj.jpg';
import imagePath from './assets/logi.png';
import imagePath2 from './assets/Aboutus.jpg';
import FeedbackForm from "./assets/pages/feedback/feedback";
import Dashboard from "./admin/admindashboard";
import CreateCardForm from "./admin/createpaint";
import Users from "./admin/users";
import Search from "./assets/pages/search/search";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdminLogin from "./admin/adminlogin/adminlogin";
import Allitems from "./admin/allitem";
import ProductDetail from "./assets/pages/ProductDetail/productdetail";
import GetFeedback from "./admin/getfeedback";
import GetContact from "./admin/getcontact";

// Define your QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Homepage
              navbarImageSrc={imagePath}
              bottomImageSrc={imagePath1}
              aboutusSrc={imagePath2}
            />}
          />
          <Route
            path="/contact"
            element={<ContactUs
              navbarImageSrc={imagePath}
              aboutusSrc={imagePath2}
            />}
          />
          <Route
            path="/feedback"
            element={<FeedbackForm
              navbarImageSrc={imagePath}
              aboutusSrc={imagePath2}
            />}
          />
          <Route
            path="/search"
            element={<Search
              navbarImageSrc={imagePath}
              aboutusSrc={imagePath2}
            />}
          />
          <Route
            path="/admin-dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/createcard"
            element={<CreateCardForm />}
          />
          <Route
            path="/users"
            element={<Users />}
          />
          <Route
            path="/adminlogin"
            element={<AdminLogin />}
          />
          <Route
            path="/allitem"
            element={<Allitems />}
          />
          <Route
            path="/getfeed"
            element={<GetFeedback />}
          />
          <Route
            path="/getcont"
            element={<GetContact />}
          />
          
           <Route
            path="/search/:id"
            element={<ProductDetail
              navbarImageSrc={imagePath}
              aboutusSrc={imagePath2}/>}
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
