import React from "react";
import { Carousel } from "antd";
import Footer from "./Footer";

function Home({ handleLogin, handleGuest }) {
  return (
    <div className="home-page">
      {/* Main Image */}
      <div className="main-image">
        <img
          src="https://admin.amritahospitals.org/sites/default/files/amrita%20logo.svg"
          alt="Amrita Hospital Logo"
        />
      </div>

    <div className="home-title">
        PWA TITLE
    </div>
      <p className="home-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel provident obcaecati, voluptates velit animi dolore consectetur quae, ratione iure quod laudantium sed iste officiis nemo sit rem? Accusamus, blanditiis eius?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa corrupti totam voluptate minus. Blanditiis, vel. Sunt, adipisci ex quod doloribus ipsa, minus totam cupiditate ea fugit id, modi quos officiis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus consequatur perferendis voluptatem totam explicabo numquam quis harum molestiae voluptas tempore quaerat saepe maxime ex, adipisci recusandae animi sit ab.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero iusto suscipit minus eligendi architecto vitae tenetur asperiores at, neque beatae similique adipisci cupiditate voluptatum ab excepturi, aut error nisi dignissimos.
      </p>


      {/* Carousel with Images */}
        <Carousel autoplay autoplaySpeed={5000} className="carousel">
            <div>
            <img
                src="https://admin.amritahospitals.org/sites/default/files/amrita%20logo.svg"
                alt="Amrita Hospital Logo"
                className="carousel-image"
            />
            </div>
            <div>
            <img
                src="https://admin.amritahospitals.org/sites/default/files/amrita%20logo.svg"
                alt="Amrita Hospital Logo"
                className="carousel-image"

            />
            </div>
        </Carousel>

      

      {/* Buttons */}
      <div className="button-container">
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <button className="guest-button" onClick={handleGuest}>
          Continue as Guest
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
