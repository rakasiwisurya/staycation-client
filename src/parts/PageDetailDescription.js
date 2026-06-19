import React from "react";
import parse from "html-react-parser";
import getImageUrl from "utils/getImageUrl";

export default function pageDetailDescription({ data }) {
  return (
    <main>
      <h4>About</h4>
      {parse(data.description)}
      <div className="row" style={{ marginTop: 30 }}>
        {data.featureId.length === 0
          ? null
          : data.featureId.map((feature, index) => {
              return (
                <div
                  key={`feature-${index}`}
                  className="col-3"
                  style={{ marginBottom: 20 }}
                >
                  <img
                    width="38"
                    src={getImageUrl(feature.imageUrl)}
                    alt={feature.name}
                    className="d-block mb-2"
                  />{" "}
                  <span>{feature.qty}</span>{" "}
                  <span className="text-gray-500 font-weight-light">
                    {feature.name}
                  </span>
                </div>
              );
            })}
      </div>
    </main>
  );
}
