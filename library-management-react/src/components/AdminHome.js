import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import '../cssfolder/AdminHome.css';

// Import images
import img1 from '../images/imgg1.jpeg';
import img2 from '../images/imgg3.jpeg';
import img3 from '../images/imgg4.jpeg';

const AdminHomePage = () => {
  return (
    <div className="AdminHome-container">
      <h1 className="AdminHome-heading">Library Management System - Admin Home Page</h1>
      <div className="AdminHome-section">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="AdminHome-swiper"
        >
          <SwiperSlide>
            <div className="AdminHome-slide">
              <div className="AdminHome-slideText">
                <h2 className="AdminHome-slideHeading">Manage Books Efficiently</h2>
                <p className="AdminHome-slideDescription">Seamlessly add, remove, and view all books in the library.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="AdminHome-slide">
              <div className="AdminHome-slideText">
                <h2 className="AdminHome-slideHeading">Automated User Management</h2>
                <p className="AdminHome-slideDescription">Efficiently manage user accounts with our robust system.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="AdminHome-slide">
              <div className="AdminHome-slideText">
                <h2 className="AdminHome-slideHeading">Real-time Reporting</h2>
                <p className="AdminHome-slideDescription">Access comprehensive reports on library operations in real time.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      
      <div className="AdminHome-history">
        <h2 className="AdminHome-historyHeading">Library History</h2>
        <div className="AdminHome-cards">
          <div className="AdminHome-card">
            <img src={img1} alt="Library Image 1" className="AdminHome-cardImage" />
            <div className="AdminHome-cardContent">
              <h3 className="AdminHome-cardTitle">Foundation</h3>
              <p className="AdminHome-cardText">Our library was founded in 1920 with a collection of 1,000 books.</p>
            </div>
          </div>
          <div className="AdminHome-card">
            <img src={img2} alt="Library Image 2" className="AdminHome-cardImage" />
            <div className="AdminHome-cardContent">
              <h3 className="AdminHome-cardTitle">Expansion</h3>
              <p className="AdminHome-cardText">In 1950, we expanded to include over 10,000 books and a new reading hall.</p>
            </div>
          </div>
          <div className="AdminHome-card">
            <img src={img3} alt="Library Image 3" className="AdminHome-cardImage" />
            <div className="AdminHome-cardContent">
              <h3 className="AdminHome-cardTitle">Modern Era</h3>
              <p className="AdminHome-cardText">Today, we offer digital services and a collection of over 50,000 books.</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="AdminHome-footer">
        &copy; {new Date().getFullYear()} Library Management System. All rights reserved.
      </footer>
    </div>
  );
};

export default AdminHomePage;
