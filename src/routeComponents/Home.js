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
