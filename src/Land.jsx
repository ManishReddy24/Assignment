/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Land.css";

function Land({ data }) {
  const length = data?.land_media?.length || 0;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      onForward();
    }, 5000);
  }, []);

  const onForward = () => {
    setIndex((prev) => {
      return prev === length - 1 ? 0 : prev + 1;
    });
  };

  const onBackward = () => {
    setIndex((prev) => {
      return prev === 0 ? length - 1 : prev - 1;
    });
  };

  return (
    <div className="property-card">
      <div className="photos">
        <button onClick={onBackward} className="prev">
          ‹
        </button>
        <img
          src={data?.land_media[index]?.image}
          alt="Map of property location"
        />
        <button onClick={onForward} className="next">
          ›
        </button>
      </div>
      <div className="icons">
        <div className="share">
          <img src="/src/assets/arrow.png" alt="share icon" />
        </div>
        <div className="like">
          <img src="/src/assets/heart.png" alt="like icon" />
        </div>
      </div>

      <div className="property-details">
        <h2>
          {data.village_name}, {data.mandal_name}
        </h2>
        <p>{data.district_name} (dt)</p>
        <p>
          <b
            style={
              data.total_land_size_in_acres.acres !== 0.0
                ? { display: "inline-block", padding: "4px" }
                : { display: "none" }
            }
          >
            {data.total_land_size_in_acres.acres} Acres
          </b>
          <b
            style={
              data.total_land_size_in_acres.guntas !== 0.0
                ? { display: "inline-block", padding: "4px" }
                : { display: "none" }
            }
          >
            {data.total_land_size_in_acres.guntas} Guntas
          </b>
          • ₹{" "}
          {data.price_per_acre_crore.crore == 0
            ? data.price_per_acre_crore.lakh + " lakhs for full property"
            : data.price_per_acre_crore.crore +
              " crores " +
              data.price_per_acre_crore.lakh +
              " lakhs per acre"}
        </p>
      </div>
    </div>
  );
}

export default Land;
