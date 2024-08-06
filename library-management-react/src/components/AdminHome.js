import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import '../cssfolder/AdminHome.css';

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
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="AdminHome-slide">
              <div className="AdminHome-slideText">
                <h2 className="AdminHome-slideHeading">Manage Books Efficiently</h2>
                <p className="AdminHome-slideDescription">Seamlessly add, remove, and view all books in the library.</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide>
            <div className="AdminHome-slide">
              <div className="AdminHome-slideText">
                <h2 className="AdminHome-slideHeading">Automated User Management</h2>
                <p className="AdminHome-slideDescription">Efficiently manage user accounts with our robust system.</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 3 */}
          <SwiperSlide>
            <div className="AdminHome-slide">
              <div className="AdminHome-slideText">
                <h2 className="AdminHome-slideHeading">Real-time Reporting</h2>
                <p className="AdminHome-slideDescription">Access comprehensive reports on library operations in real time.</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Add more slides as needed */}
        </Swiper>
      </div>
      <footer className="AdminHome-footer">
        &copy; {new Date().getFullYear()} Library Management System. All rights reserved.
      </footer>
    </div>
  );
};

export default AdminHomePage;
