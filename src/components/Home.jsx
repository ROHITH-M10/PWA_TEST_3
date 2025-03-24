import React, { useEffect, useState } from "react";
import { Carousel, Modal } from "antd";
import Footer from "./Footer";
import Guest from "./Guest";
import Sample_Image_1 from "../../public/images/sample_image_amrita_1.jpg";
import Sample_Image_2 from "../../public/images/sample_image_amrita_2.jpg";
import servers from "../data/servers.json";

function Home({handleGuest, isModalVisible, setIsModalVisible, setAdminUrl, openDropdown, toggleDropdown, handleSelect, selectedUrl, selectedServerOption, setSelectedServerOption, saveServerSelection}) {


// // Check localStorage on mount
// useEffect(() => {
//   const guestStatus = localStorage.getItem("guestUser");
//   console.log("Guest Status: ", guestStatus);
//   if (!guestStatus && isModalVisible === true) {
//     console.log("Modal visibility on");
//     setIsModalVisible(true); // Show modal if no selection is saved
//   }
//   else {
//     console.log("Modal visibility off");
//     setIsModalVisible(false); // Hide modal if selection is saved
//   }
  
// }, []);

// const servers = {
//   "Metaflo": "https://research.amritahospitals.org/",
//   "AIMS Metaflo": "https://research-int.amritahospitals.org/",
//   "L1-Staging-Metaflo": "http://test-ahis-l1.amrita.edu/"
// }

  // Handle Server Selection from localStorage
  useEffect(() => {
    const server = localStorage.getItem("server");
    console.log("Server Selected: ", server);
    console.log("Modal popup: ", isModalVisible);
    if (!server && isModalVisible === false) {
      console.log("Modal visibility setting to off since next will be second time");
      setIsModalVisible(false); // Show modal if no selection is saved
    }
    else {
      if (!server) {
        setAdminUrl(servers[selectedServerOption]);
        setSelectedServerOption(selectedServerOption);
        console.log("Server selection saved: ", selectedServerOption);

      }
      else {
        if (server && selectedServerOption !== server && isModalVisible === false) {
          setAdminUrl(servers[selectedServerOption]);
          setSelectedServerOption(selectedServerOption);

        }
        else{
      console.log("Modal visibility off");
      console.log("Modal visibility", isModalVisible);
      console.log("Server selection saved: ", server);
      setIsModalVisible(false); // Hide modal if selection is saved
      setAdminUrl(servers[server]);
      setSelectedServerOption(server);
      console.log("Server selection saved: ", server);
      console.log("Admin URL: ", servers[server]);
      // update server
        }
      }

    }

  }, []);


  

  // Handle Guest Selection
  // const handleGuestSelection = () => {
  //   handleGuest(); // Call guest function
  //   setIsModalVisible(false); // Close
  // };

  // // Save Guest Selection
  // const saveGuestSelection = () => {
  //   console.log("Guest Data Saved");
  //   localStorage.setItem("guestUser", true); // Save guest selection
  //   setIsModalVisible(false); // Close modal
  //   handleGuest(); // Call guest function
  // };



  return (
    <div className="home-page">
      {/* Modal for first-time login */}
      <Modal 
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        centered
      >
        <p className="modal-text">Select your preferred server</p>
        <div className="modal-button-container">
          <button className="modal-metaflo-button" onClick={saveServerSelection("Metaflo")}>Metaflo</button>
          <button className="modal-aims-metaflo-button" onClick={saveServerSelection("AIMS Metaflo")}>AIMS Metaflo</button>
          <button className="modal-l1-test-button" onClick={saveServerSelection("L1-Staging-Metaflo")}>L1-Staging-Metaflo</button>
        </div>
      </Modal>

      {/* Main Image */}
      <div className="main-image">
        <img
          src="https://admin.amritahospitals.org/sites/default/files/amrita%20logo.svg"
          alt="Amrita Hospital Logo"
        />
      </div>

      <div className="home-title">TITLE</div>
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
      {/* <div className="home-button-container">
        <button className="login-button" onClick={handleLogin}>Login</button>
        <button className="guest-button" onClick={handleGuestSelection}>Continue as Guest</button>
      </div> */}


      <Guest
        openDropdown={openDropdown}
        toggleDropdown={toggleDropdown}
        handleSelect={handleSelect}
        selectedUrl={selectedUrl}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;