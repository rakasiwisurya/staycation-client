import React from "react";
import propTypes from "prop-types";
import Button from "elements/Button";
import "./index.scss";

export default function Breadcrumb(props) {
  return (
    <nav aria-label="breadcrumb">
      <ol className={["breadcrumb", props.outerClassName].join(" ")}>
        {props.data.map((item, index) => {
          return (
            <li
              key={`breadcrumb-${index}`}
              className={`breadcrumb-item${
                index === props.data.length - 1 ? " active" : ""
              }`}
            >
              {index === props.data.length - 1 ? (
                item.pageTitle
              ) : (
                <Button type="link" href={item.pageHref}>
                  {item.pageTitle}
                </Button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

Breadcrumb.propTypes = {
  data: propTypes.array,
  outerClassName: propTypes.string,
};
