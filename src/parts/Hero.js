import React from "react";
import { Fade } from "react-awesome-reveal";
import ImageHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.jpg";
import IconCities from "assets/images/icons/ic_cities.svg";
import IconTraveller from "assets/images/icons/ic_traveller.svg";
import IconTreasures from "assets/images/icons/ic_treasures.svg";
import Button from "elements/Button";
import formatNumber from "utils/formatNumber";

export default function Hero(props) {
  const showMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  };

  return (
    <Fade direction={"up"}>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-lg-auto col-sm-12" style={{ width: 553 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Forget busy work, <br />
              start next vacation
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments..
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me
            </Button>

            <div
              className="row row-cols-3"
              style={{ marginTop: 80, marginBottom: 50 }}
            >
              <div className="col-md-auto text-truncate">
                <img
                  width="36"
                  height="36"
                  src={IconTraveller}
                  alt={`${props.data.travelers} Travellers`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.travelers)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    travellers
                  </span>
                </h6>
              </div>

              <div className="col-md-auto text-truncate">
                <img
                  width="36"
                  height="36"
                  src={IconTreasures}
                  alt={`${props.data.treasures} Treasures`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.treasures)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    treasures
                  </span>
                </h6>
              </div>

              <div className="col-md-auto text-truncate">
                <img
                  width="36"
                  height="36"
                  src={IconCities}
                  alt={`${props.data.cities} Cities`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.cities)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    cities
                  </span>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-lg-6 d-none d-lg-block">
            <div style={{ width: 520, height: 410 }}>
              <img
                src={ImageHero}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
              />
              <img
                src={ImageHero_}
                alt="Room with couches frame"
                className="img-fluid position-absolute"
                style={{ margin: "0 -15px -15px 0" }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
