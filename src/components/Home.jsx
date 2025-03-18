import React, { useEffect, useState } from "react";
import { Carousel, Modal } from "antd";
import Footer from "./Footer";
import Sample_Image_1 from "../../public/images/sample_image_amrita_1.jpg";
import Sample_Image_2 from "../../public/images/sample_image_amrita_2.jpg";

function Home({ handleLogin, handleGuest, isModalVisible, setIsModalVisible }) {


// Check localStorage on mount
useEffect(() => {
  const guestStatus = localStorage.getItem("guestUser");
  console.log("Guest Status: ", guestStatus);
  if (!guestStatus && isModalVisible === true) {
    console.log("Modal visibility on");
    setIsModalVisible(true); // Show modal if no selection is saved
  }
  else {
    console.log("Modal visibility off");
    setIsModalVisible(false); // Hide modal if selection is saved
  }
  
}, []);


  

  // Handle Guest Selection
  const handleGuestSelection = () => {
    handleGuest(); // Call guest function
    setIsModalVisible(false); // Close
  };

  // Save Guest Selection
  const saveGuestSelection = () => {
    console.log("Guest Data Saved");
    localStorage.setItem("guestUser", true); // Save guest selection
    setIsModalVisible(false); // Close modal
    handleGuest(); // Call guest function
  };

  return (
    <div className="home-page">
      {/* Modal for first-time login */}
      <Modal 
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        centered
      >
        <p className="modal-text">Would you like to log in or continue as a guest?</p>
        <div className="modal-button-container">
          <button className="modal-login-button" onClick={handleLogin}>Login</button>
          <button className="modal-guest-button" onClick={saveGuestSelection}>Continue as Guest</button>
        </div>
      </Modal>

      {/* Main Image */}
      <div className="main-image">
        <img
          src="https://admin.amritahospitals.org/sites/default/files/amrita%20logo.svg"
          alt="Amrita Hospital Logo"
        />
      </div>

      <div className="home-title">PWA TITLE</div>
      <p className="home-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam sapiente nulla ex nostrum dolor molestias expedita molestiae nihil! Quas quidem sed doloribus quasi iusto sunt ullam deserunt, enim quae consequatur!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos perferendis numquam excepturi architecto reprehenderit doloribus aliquam! Veritatis nihil recusandae officiis vitae consequuntur? Vero molestias numquam quaerat culpa esse vitae quo?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, distinctio quidem ut et atque, eaque inventore minima explicabo a deserunt dolore nemo quasi suscipit maiores culpa tempora dolor totam fugit?
      </p>

      {/* Carousel */}
      <Carousel autoplay autoplaySpeed={5000} className="carousel">
        <div>
          <img src={Sample_Image_1} alt="Sample 1" className="carousel-image" />
        </div>
        <div>
          <img src={Sample_Image_2} alt="Sample 2" className="carousel-image" />
        </div>
      </Carousel>

      {/* Buttons */}
      <div className="home-button-container">
        <button className="login-button" onClick={handleLogin}>Login</button>
        <button className="guest-button" onClick={handleGuestSelection}>Continue as Guest</button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;