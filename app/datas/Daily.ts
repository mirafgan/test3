import { IDailyProps } from "../types/interface";

const apiKey = "9400084bd0795e15d5dd086f9a7a6356";

// Fetch daily data
export async function getDailyData(city: string): Promise<IDailyProps> {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&appid=${apiKey}`
  );

  if (!data.ok) {
    console.log("Failed to fetch data");
  }

  const dailyDatas = await data.json();

  return dailyDatas;
}
