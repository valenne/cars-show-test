/* eslint-disable @typescript-eslint/naming-convention */

interface CardCarsProps {
    'city_mpg': number;
    'class': string;
    'combination_mpg': number;
    'cylinders': number;
    'displacement': number;
    'drive': string;
    'fuel_type': string;
    'highway_mpg': number;
    'make': string;
    'model': string;
    'transmission': string;
    'year': number;
}

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CardCarsProps;
}

function CardDetails({car, closeModal, isOpen}: CarDetailsProps) {

  return (
    <div>{car.model}</div>
  );
}

export default CardDetails;
