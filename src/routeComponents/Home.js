import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import family from "../assets/images/family.jpg";
import background from "../assets/images/backgound01.jpg";
import intermed from "../assets/images/intermed01.png";
import "../../src/assets/styles/Home.css";

function Home() {
  const translate = document.querySelectorAll(".translate");
  const big_intermed = document.querySelector(".intermed");
  const header = document.querySelector("header");
  const shadow = document.querySelector(".shadow");
  const content = document.querySelector(".content");
  const section = document.querySelector("section");
  const image_container = document.querySelector(".imgContainer");
  const opacity = document.querySelectorAll(".opacity");
  const border = document.querySelector(".border");

  // let header_height = header.offsetHeight;
  // let section_height = section.offsetHeight;
  // console.log(section_height);

  window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset;
    // let sectionY = section.getBoundingClientRect();

    translate.forEach((element) => {
      let speed = element.dataset.speed;
      element.style.transform = `translateY(${scroll * speed}px)`;
    });

    // opacity.forEach((element) => {
    //   element.style.opacity = scroll / (sectionY.top + section_height);
    // });

    // big_intermed.style.opacity = -scroll / (header_height / 2) + 1;
    // shadow.style.height = `${scroll * 0.5 + 120}px`;
    // content.style.transform = `translateY(${
    //   (scroll / (section_height + sectionY.top)) * 50 - 50
    // }px)`;
    // image_container.style.transform = `translateY(${
    //   (scroll / (section_height + sectionY.top)) * -50 + 50
    // }px)`;

    // border.style.width = `${(scroll / (sectionY.top + section_height)) * 40}%`;
  });

  return (
    <div className="allHomeBody">
      <img
        className="background translate"
        data-speed="0.6"
        src={background}
        alt="background"
      />

      <div className="homeBody">
        <Navbar className="navbar" />
        <header>
          <div className="alignIntermed">
            <img
              className="intermed translate"
              data-speed="0.6"
              src={intermed}
              alt="intermed"
            />
          </div>
        </header>
        <section>
          <div className="shadow"></div>
          <div className="container">
            <div className="content opacity">
              <h3 className="aboutTitle">
                About Us
                <div className="border"></div>
              </h3>
              <p className="text">
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI, quando um impressor desconhecido pegou uma bandeja de tipos
                e os embaralhou para fazer um livro de modelos de tipos. Lorem
                Ipsum sobreviveu não só a cinco séculos, como também ao salto
                para a editoração eletrônica, permanecendo essencialmente
                inalterado. Se popularizou na década de 60, quando a Letraset
                lançou decalques contendo passagens de Lorem Ipsum, e mais
                recentemente quando passou a ser integrado a softwares de
                editoração eletrônica como Aldus PageMaker.
              </p>
            </div>

            <div className="imgContainer opacity">
              <img src={family} alt="family" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
