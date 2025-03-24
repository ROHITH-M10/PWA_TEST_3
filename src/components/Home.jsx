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
          <button className="modal-metaflo-button" onClick={saveServerSelection("Web Forms")}>Web Forms</button>
          <button className="modal-aims-metaflo-button" onClick={saveServerSelection("Registries")}>Registries</button>
          <button className="modal-l1-test-button" onClick={saveServerSelection("Staging / Test")}>Staging / Test</button>
        </div>
      </Modal>

      {/* Main Image */}
      <div className="main-image">
        <img
          src="https://admin.amritahospitals.org/sites/default/files/amrita%20logo.svg"
          alt="Amrita Hospital Logo"
        />
      </div>

      <div className="home-title">AIMS Research Portal</div>
      <p className="home-text">
      Amrita Hospital, located in Kochi, is one of Asia's largest private hospitals. Established in 1998 by Sri Mata Amritanandamayi Devi (AMMA), it has provided advanced healthcare to over 10 million individuals. The hospital has expanded to Faridabad, Delhi, and operates using the Amrita Hospital Information Suite (HIS), developed by Amrita Technologies. This system securely stores extensive patient data, which has been accumulated over two decades. This data serves as a valuable resource for doctors, researchers, students, and collaborators, supporting future studies, informed decision-making, and problem-solving for societal benefit.
      <br />
      <br />

      To further enhance data collection and research capabilities, a dedicated mobile app is being introduced. This app will facilitate prospective data collection from patients, supporting community health initiatives and clinical research projects. By allowing real-time data entry and secure patient interactions, the app aims to improve early disease detection, monitor public health trends, and provide valuable insights for medical advancements.
      <br />
      <br />
      The use of this app is governed by the Amrita Hospital Data Sharing Policy(
      <a href="https://research.amritahospitals.org/files/Data_Sharing_Policy_AIMS_Review.pdf" target="_blank" rel="noopener noreferrer">Open</a>
      ), ensuring that all collected data is securely managed and utilized in compliance with ethical and regulatory standards. Patient confidentiality, data security, and responsible usage are central to this policy, reinforcing Amrita Hospital's commitment to maintaining the highest standards of medical research and public health initiatives.
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