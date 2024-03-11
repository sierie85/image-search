import React from "react";

/**
 * Renders the container component.
 *
 * @component
 * @param {Object} props The properties of the container.
 * @param {string} props.className The class name of the
 * @param {JSX.Element} props.children The children of the
 * @returns {JSX.Element} The rendered component.
 **/
const Container = (props: any) => {
  return (
    <div
      className={`container p-8 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default Container;
