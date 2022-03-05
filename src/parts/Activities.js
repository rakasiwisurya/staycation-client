import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "elements/Button";

export default function Activities({ data }) {
  if (data.length === 0) return null;
  return (
    <section className="container">
      <Fade direction={"up"}>
        <h4 className="mb-3 font-weight-medium">Activities</h4>
        <div className="row">
          {data.map((item, index) => (
            <div
              className="col-md-3 col-sm-12 mb-3 mb-md-0"
              key={`activity${index}`}
            >
              <Fade direction={"up"} delay={300 * index}>
                <div className="card">
                  {item.isPopular && (
                    <div className="tag">
                      Popular <span className="font-weight-light">Choice</span>
                    </div>
                  )}
                  <figure className="img-wrapper" style={{ height: 180 }}>
                    <img
                      src={item.imageUrl}
                      alt={item.imageUrl}
                      className="img-cover"
                    />
                  </figure>
                  <div className="meta-wrapper">
                    <Button
                      type="link"
                      href={`/properties/${item._id}`}
                      className="stretched-link d-block text-gray-800"
                    >
                      <h5 className="h4">{item.name}</h5>
                    </Button>
                    <span className="text-gray-500">{item.type}</span>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
}
