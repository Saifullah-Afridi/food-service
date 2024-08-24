import React, { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import { Spinner } from "flowbite-react";
import axios from "axios";

const HotelCards = () => {
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await axios.get("http://localhost:3000/hotels");
        setHotels(res.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchHotels();
  }, []);

  return (
    <div>
      {error && <h3>No hotel is availabale</h3>}
      {loading ? (
        <Spinner className="flex flex-col justify-center items-center" />
      ) : (
        <>
          <h2 className="text-2xl text-center mb-6">Food Services-Hotels</h2>
          <div className="flex flex-wrap gap-4 space-y-6">
            {hotels?.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HotelCards;
