import { IDayData } from "../types/interface";

const apiKey = "9400084bd0795e15d5dd086f9a7a6356";

// fetch one day data
export const fetchDayData = async () => {
  const dayData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Baku&appid=${apiKey}`
  );

  if (!dayData.ok) {
    throw new Error("Failed to fetch data");
  }
  const dayRes: IDayData = await dayData.json();

  return dayRes;
};
