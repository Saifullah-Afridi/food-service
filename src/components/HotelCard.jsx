"use client";

import { Button, Card } from "flowbite-react";
import sheraz from "../assets/sheraz.jpg";
import { useNavigate } from "react-router-dom";
const HotelCard = () => {
  const navigate = useNavigate();
  return (
    <Card className="w-[270px] flex flex-col gap-1">
      <img
        src={sheraz}
        alt="sheraz hotel picture"
        className="w-full h-auto bg-cover bg-center"
      />
      <p className="text-md">
        Shiraz Hotel offers a unique Fine Dining experience with heavenly views
        and delicious food. We take pride in offering an authentic Pakistani
        cuisine.
      </p>
      <Button
        onClick={() => navigate("/hotel/2323")}
        className="bg-[#E13D01] hover:!bg-[#ffcb04] hover:!text-gray-900 transition-all "
      >
        View Detail
      </Button>
    </Card>
  );
};

export default HotelCard;
