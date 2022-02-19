import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "elements/Button";

export default function MostPicked(props) {
  return (
    <section className="container" ref={props.refMostPicked}>
      <Fade direction={"up"}>
        <h4 className="mb-3">Most Picked</h4>
        {/* <div className="container-grid"> */}
        <div className="row">
          <Fade
            direction={"up"}
            className="col-md-4 col-sm-12"
            key={`mostPicked-0`}
          >
            <div className="card card-featured">
              <div className="tag">
                ${props.data[0].price}
                <span className="font-weight-light">
                  per {props.data[0].unit}
                </span>
              </div>
              <figure className="img-wrapper">
                <img
                  src={props.data[0].imageId[0].imageUrl}
                  alt={props.data[0].title}
                  className="img-cover"
                />
              </figure>
              <div className="meta-wrapper">
                <Button
                  type="link"
                  className="stretched-link d-block text-white"
                  href={`properties/${props.data[0]._id}`}
                >
                  <h5>{props.data[0].title}</h5>
                </Button>
                <span>
                  {props.data[0].city}, {props.data[0].country}
                </span>
              </div>
            </div>
          </Fade>
          <div className="col-md-8 col-sm-12">
            <div className="row">
              {props.data.map((item, index) => (
                <Fade
                  direction={"up"}
                  delay={300 * (index + 1)}
                  className={`col-md-6 col-sm-12 mb-4 ${
                    index === 0 && "d-none"
                  } ${(index === 3 || index === 4) && "mb-md-0"}`}
                  key={`mostPicked-index${index}`}
                >
                  <div
                    className="card card-featured"
                    style={{ minHeight: 176 }}
                  >
                    <div className="tag">
                      ${item.price}
                      <span className="font-weight-light">per {item.unit}</span>
                    </div>
                    <figure className="img-wrapper">
                      <img
                        src={item.imageId[0].imageUrl}
                        alt={item.title}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        className="stretched-link d-block text-white"
                        href={`properties/${item._id}`}
                      >
                        <h5>{item.title}</h5>
                      </Button>
                      <span>
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
