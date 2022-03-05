import React from "react";
import { Fade } from "react-awesome-reveal";
import Breadcrumb from "elements/Breadcrumb";

export default function PageDetailTitle({ data, breadcrumb }) {
  return (
    <section className="container spacing-sm">
      <Fade direction={"up"}>
        <div className="row align-items-center">
          <div className="col-md col-sm-12">
            <Breadcrumb data={breadcrumb} />
          </div>
          <div className="col-md-auto col-sm-12 text-center">
            <h1 className="h2">{data.title}</h1>
            <span className="text-gray-400">
              {data.city}, {data.country}
            </span>
          </div>
          <div className="col"></div>
        </div>
      </Fade>
    </section>
  );
}
