"use client";

import React, { useEffect, useState } from "react";

const API_Key = "ndaB3wYu8a6PPN9PBVuM"

const CountryLookup = () =>{
    const [country, setCountry] = useState("United States");

    console.log("Api key", API_Key)

    useEffect(() => {
        fetch(
          `https://extreme-ip-lookup.com/json/?key=${API_Key}`
        )
          .then((res) => res.json()) 
          .then((data) => setCountry(data));
      }, []);

      console.log("Country Code", country.countryCode)
      console.log("City", country.city)
      console.log("continent",  country.continent)
      console.log("ipName", country.ipName)
      console.log("ip type",  country.ipType)
      console.log("isp", country.isp)
      console.log("lat", country.lat)
      console.log("lon", country.lon)
      console.log("org", country.org)
      console.log("query", country.query)
      console.log("region", country.region,)
      console.log("status", country.status)

    return(
        <>
        <div>
            {country.country}
        </div>
        </>
    )
}

export default CountryLookup;