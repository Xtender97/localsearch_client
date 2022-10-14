import { useState } from "react";
import { useBusiness } from "../../hooks/useBusiness";
import { NextButton } from "../NextButton/NextButton";
import { IoLocationOutline } from "react-icons/io5";
import "./BusinessCard.scss";
import { Spinner } from "../Spinner/Spinner";
import { Error } from "../Error/Error";
import { BusinessHours } from "../BusinessHours/BusinessHours";

export function BusinessCard() {
  const [id, setId] = useState<string>();
  const { response: businesss, loading, error } = useBusiness(id);

  if (error) return <Error text={error.message} />;

  const openClass = `card__state ${
    businesss?.data.isOpen ? "card__state--green" : ""
  }`;

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="card">
          <div className="card__name">{businesss?.data.displayed_what}</div>
          <div className={openClass}>
            {businesss?.data.isOpen ? "Open" : "Closed"}
          </div>
          <div className="card__address">
            <IoLocationOutline className="card__icon" color="white" />
            {businesss?.data.displayed_where}
          </div>

          <BusinessHours
            openingHours={businesss?.data.opening_hours}
          ></BusinessHours>
        </div>
      )}
      <NextButton onClick={() => setId(businesss?.next)} />
    </>
  );
}
