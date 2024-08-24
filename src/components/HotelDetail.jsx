import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HotelDetail = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const fetchHotels = async () => {
      try {
        setLoading(true);
        setError("");
        console.log(1);

        const res = await axios.get(`http://localhost:3000/hotels?id=${id}`, {
          signal: controller.signal,
        });
        console.log(2);

        setHotel(res.data[0]);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchHotels();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <div>hello</div>
      <div>{hotel.name}</div>
    </div>
  );
};

export default HotelDetail;
