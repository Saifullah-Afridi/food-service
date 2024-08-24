import React, { useState } from "react";
import HotelCard from "./HotelCard";

const HotelCards = () => {
  const [hotels, setHotels] = useState([]);
  return (
    <div className="flex flex-wrap gap-4 space-y-6">
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
    </div>
  );
};

export default HotelCards;
