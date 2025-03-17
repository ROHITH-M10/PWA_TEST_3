import React, { useEffect, useState } from "react";
import { Carousel, Modal } from "antd";
import Footer from "./Footer";
import Sample_Image_1 from "../../public/images/sample_image_amrita_1.jpg";
import Sample_Image_2 from "../../public/images/sample_image_amrita_2.jpg";

function Home({ handleLogin, handleGuest }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    const guestStatus = localStorage.getItem("guestUser");
    if (!guestStatus) {
      setIsModalVisible(true); // Show modal if no selection is saved
    }
  }, []);

  // Handle Guest Selection
  const handleGuestSelection = () => {
    localStorage.setItem("guestUser", "true"); // Save selection
    setIsModalVisible(false); // Hide modal
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
          <button className="mondal-login-button" onClick={handleLogin}>Login</button>
          <button className="mondal-guest-button" onClick={handleGuestSelection}>Continue as Guest</button>
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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores unde ratione corporis suscipit accusantium voluptatum doloremque qui quos alias nam repudiandae et, nobis assumenda veniam dolor hic iste voluptates sint.
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
