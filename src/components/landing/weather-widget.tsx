"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Cloud, CloudRain, Wind, MapPin, Loader2 } from "lucide-react";
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';


type WeatherData = {
  current_condition: {
    temp_C: string;
    weatherDesc: { value: string }[];
    windspeedKmph: string;
  }[];
  nearest_area: {
    areaName: { value: string }[];
    region: { value: string }[];
  }[];
  weather: {
    date: string;
    maxtempC: string;
    mintempC: string;
    hourly: {
      weatherDesc: { value: string }[];
    }[];
  }[];
};

const weatherIcons: { [key: string]: React.ReactNode } = {
  "sunny": <Sun className="h-8 w-8 text-amber-400" />,
  "clear": <Sun className="h-8 w-8 text-amber-400" />,
  "partly cloudy": <Cloud className="h-8 w-8 text-slate-400" />,
  "cloudy": <Cloud className="h-8 w-8 text-slate-400" />,
  "overcast": <Cloud className="h-8 w-8 text-slate-500" />,
  "mist": <Cloud className="h-8 w-8 text-slate-400" />,
  "patchy rain possible": <CloudRain className="h-8 w-8 text-blue-400" />,
  "light rain": <CloudRain className="h-8 w-8 text-blue-400" />,
  "rain": <CloudRain className="h-8 w-8 text-blue-400" />,
  "light drizzle": <CloudRain className="h-8 w-8 text-blue-400" />,
};

function getWeatherIcon(description: string, size: 'large' | 'small' = 'large') {
    const desc = description.toLowerCase();
    const className = size === 'large' ? "h-10 w-10" : "h-8 w-8";
    for (const key in weatherIcons) {
        if (desc.includes(key)) {
            return React.cloneElement(weatherIcons[key] as React.ReactElement, { className });
        }
    }
    return <Cloud className={`${className} text-slate-400`} />;
}


export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async (location: string) => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/weather?location=${encodeURIComponent(location)}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Não foi possível obter a previsão do tempo.");
        }
        const data = await response.json();
        setWeather(data);
      } catch (err: any) {
        setError(err.message);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    const fetchFallbackWeather = () => {
        setError("Localização negada. Mostrando previsão para São Paulo.");
        fetchWeather("Sao Paulo");
    }
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(`${latitude},${longitude}`);
        },
        () => {
          fetchFallbackWeather();
        }
      );
    } else {
      setError("Geolocalização não suportada. Mostrando previsão para São Paulo.");
      fetchWeather("Sao Paulo");
    }
  }, []);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex flex-col items-center justify-center text-slate-400 w-full h-40">
          <Loader2 className="h-6 w-6 animate-spin mr-3" />
          <span>Carregando previsão do tempo...</span>
        </div>
      );
    }
    
    if (error && !loading && !weather) {
       return (
         <div className="text-center text-yellow-500 w-full h-24 flex items-center justify-center">
            <p>{error}</p>
        </div>
      );
    }

    if (!weather) {
       return (
         <div className="text-center text-red-400 w-full h-24 flex items-center justify-center">
            <p>Não foi possível carregar a previsão do tempo.</p>
        </div>
      );
    }

    const current = weather.current_condition[0];
    const area = weather.nearest_area[0];
    const locationName = `${area.areaName[0].value}, ${area.region[0].value}`;
    const weatherDescription = current.weatherDesc[0].value;
    const forecast = weather.weather.slice(0, 3);

    return (
        <div className="flex flex-col gap-6">
            {error && !loading && (
                 <div className="text-center text-yellow-500 w-full flex items-center justify-center text-sm pb-2">
                    <p>{error}</p>
                </div>
            )}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    {getWeatherIcon(weatherDescription, 'large')}
                    <div>
                        <p className="text-4xl font-bold text-white">{current.temp_C}°C</p>
                        <p className="text-slate-300">{weatherDescription}</p>
                    </div>
                </div>
                <div className="text-center sm:text-right">
                    <p className="flex items-center justify-center sm:justify-end gap-2 text-lg font-semibold text-white">
                        <MapPin className="h-5 w-5 text-amber-400" />
                        {locationName}
                    </p>
                    <p className="flex items-center justify-center sm:justify-end gap-2 text-slate-400 mt-1">
                        <Wind className="h-5 w-5" />
                        Vento: {current.windspeedKmph} km/h
                    </p>
                </div>
            </div>
            <div className="border-t border-slate-700 my-2"></div>
            <div className="grid grid-cols-3 gap-4 text-center">
                {forecast.map((day, index) => {
                    const dayName = index === 0 ? "Hoje" : format(parseISO(day.date), "EEE", { locale: ptBR });
                    const dayWeatherDesc = day.hourly[4].weatherDesc[0].value; // Weather at noon

                    return (
                        <div key={day.date} className="flex flex-col items-center gap-2">
                             <p className="font-bold text-slate-300 capitalize">{dayName}</p>
                             {getWeatherIcon(dayWeatherDesc, 'small')}
                             <p className="text-sm text-white">
                                <span className="font-bold">{day.maxtempC}°</span>
                                <span className="text-slate-400">/{day.mintempC}°</span>
                             </p>
                        </div>
                    );
                })}
            </div>
      </div>
    );
  };

  return (
    <section id="weather-section" className="mb-20">
      <Card className="max-w-2xl mx-auto glass-effect shadow-lg">
        <CardContent className="p-6">
            {renderContent()}
        </CardContent>
      </Card>
    </section>
  );
}
