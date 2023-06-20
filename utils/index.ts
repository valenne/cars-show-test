
/* eslint-disable @typescript-eslint/naming-convention */

export async function fetchCars() {

  const headers: any = {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.RAPID_HOST,
  };

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers});
  const result = await response.json();

  return result;

}

export function rentalPrice(year: number, miles: number) {
  // Base price for rental
  const basePrice = 50;

  // Mileage rate
  const mileageRate = 0.10;

  // Additional charge for older cars
  const additionalCharge = year < 2010 ? 10 : 0;

  // Calculate the total price
  const totalPrice = basePrice + additionalCharge + mileageRate * miles;

  // Return the total price
  return totalPrice.toFixed(0);
}
