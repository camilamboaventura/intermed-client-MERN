import React from "react";
import Navbar from "../components/Navbar";
import family from "../assets/images/family.jpg";
import homeIntermed from "../assets/images/intermed01.png";
import "../../src/assets/styles/Home.css";

function Home() {
  const translate = document.querySelectorAll(".translate");

  window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset;

    translate.forEach((element) => {
      let speed = element.dataset.speed;
      element.style.transform = `translateY(${scroll * speed}px)`;
    });
  });

  return (
    <div className="allHomeBody">
      <div>
        <Navbar className="navbarCss" />
        <header className="homeHeader">
          <div className="alignHomeIntermed translate" data-speed="0.6">
            <img
              className="homeIntermed translate"
              data-speed="0.1"
              src={homeIntermed}
              alt="homeIntermed"
            />
          </div>
        </header>
        <section className="homeSection">
          <div className="homeShadow"></div>
          <div className="homeContainerCss">
            <div className="homeContent">
              <h3 className="aboutHomeTitle">
                About Us
                <div className="homeBorder"></div>
              </h3>
              <p className="homeText">
                Intermed is an end to end health care software to
                record, organize, manage and retrieve data related to all
                departments such as Clinical, Medical Records, Book Appoitments,
                Laboratory and so on. It can be used by all health care
                professionals such as doctors, nurses, and for patients to check
                his profile and Medical Records. The other variants like
                Electronic Medical Record (EMR), Hospital Management Software
                (HIS), Clinic Management System, Practice Management
                Software, Medical Billing System etc are all signifies same
                meaning ie systematic recording of patient and billing details
                in a computer system stored either in cloud or hosted locally
                for better patient care and improve operational and financial
                outcomes. The IT management of a hospital or clinic is usually
                involved in implementation of these softwares.
              </p>
            </div>

            <div className="imgHomeContainer">
              <img src={family} alt="family" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
