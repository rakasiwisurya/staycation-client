import React from "react";
import { Fade } from "react-awesome-reveal";

export default function FeaturedImage({ data }) {
  return (
    <section className="container">
      <Fade direction={"up"}>
        <div className="row">
          <div
            className="col-md-7 col-sm-12 mb-3 mb-md-0"
            style={{ height: 582 }}
          >
            <img
              src={data[0].imageUrl}
              alt={data[0]._id}
              className="img-cover"
            />
          </div>
          <div className="col-md-5 mx-3 mx-md-0">
            <div className="row mb-3" style={{ height: 283 }}>
              <img
                src={data[1].imageUrl}
                alt={data[1]._id}
                className="img-cover"
              />
            </div>
            <div className="row" style={{ height: 283 }}>
              <img
                src={data[2].imageUrl}
                alt={data[2]._id}
                className="img-cover"
              />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
