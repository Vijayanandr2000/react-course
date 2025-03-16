import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const CountryList = () => {
  const [countryDatas, setCountryDatas] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountryDatas(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Countries</h1>
      <div className="card-container grid grid-cols-4 gap-6">
        {countryDatas.map((country) => {
          return (
            <Link
              to={`/country/${country.name.common}`}
              className="p-4 border rounded-xl shadow-md"
            >
              <img
                className="w-full h-32 object-contain"
                src={country.flags.svg}
                alt={country.name.common}
              />
              <h2>{country.name.common}</h2>
            </Link>
          );
        })}
        {/* <div className="p-4 border rounded-xl shadow-md">
          <img
            className="w-full h-32 object-contain"
            src="https://flagcdn.com/gs.svg"
            alt=""
          />
          <h2>South Georigia</h2>
        </div> */}
      </div>
    </div>
  );
};

export default CountryList;
