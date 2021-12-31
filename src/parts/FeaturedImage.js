import React from "react";
import { Fade } from "react-awesome-reveal";

export default function FeaturedImage({ data }) {
  return (
    <section className="container">
      <Fade direction={"up"}>
        <div className="row">
          <div className="col-7">
            <img src={data[0].url} alt={data[0]._id} className="img-cover" />
          </div>
          <div className="col-5">
            <div className="row mb-3">
              <img src={data[1].url} alt={data[1]._id} className="img-cover" />
            </div>
            <div className="row">
              <img src={data[2].url} alt={data[2]._id} className="img-cover" />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
