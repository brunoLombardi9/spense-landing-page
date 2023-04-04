import React from "react";

const FooterUl = ({ section }) => {
  return (
    <ul className="ps-0 me-auto">
      {section.map((f) => {
        let color;
        if (section.indexOf(f) === 0) {
          color = "link-white";
        } else {
          color = "link-dark-grey";
        }
        return <li className={`${color} my-1`}>{f}</li>;
      })}
    </ul>
  );
};

export default FooterUl;
