import { Button, Card } from "flowbite-react";
import sheraz from "../assets/sheraz.jpg";
import { useNavigate } from "react-router-dom";
const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();

  return (
    <Card className="w-[270px] flex flex-col gap-1">
      <img
        src={sheraz}
        alt="sheraz hotel picture"
        className="w-full h-auto bg-cover bg-center"
      />
      <h3 className="text-lg">{hotel.name}</h3>
      <p className="text-md">{hotel.description}</p>
      <Button
        onClick={() => navigate(`/hotel/${hotel.id}`)}
        className="bg-[#E13D01] hover:!bg-[#ffcb04] hover:!text-gray-900 transition-all "
      >
        View Detail
      </Button>
    </Card>
  );
};

export default HotelCard;
