// interface for one day datas
export interface IDayData {
  weather: [
    {
      description: string;
    }
  ];

  main: {
    feels_like: number;
  };
  name: string;
}

// interface for daily datas
export interface IDailyProps {
  list: [
    {
      dt_txt: number;
      weather: [
        {
          description: string;
          icon: string;
        }
      ];
      main: {
        feels_like: number;
      };
    }
  ];

  city: {
    name: string;
    country: string;
  };
}
