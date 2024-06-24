<template>
  <q-page class="column items-center justify-center q-pa-md bg-image">
    <div class="input-section">
      <q-input
        outlined   
        v-model="newLocation"
        label="Enter Location"
        counter
        dense       
        class="custom-input" 
      >
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="newLocation = ''" class="cursor-pointer" />
        </template>
        <template v-slot:hint>
          Enter a city name to get weather details.
        </template>
      </q-input>
      <q-btn
        size="md"    
        color="teal" 
        label="Add Widget" 
        @click="addWeatherWidget"
      />
    </div>
    <div class="widgets-section">
      <div v-for="(weather, index) in weatherStore.weatherWidgets" :key="index" class="weather-widget">
        <div class="header">
          <q-icon :name="getWeatherIcon(weather.weather[0].main)" size="50px" />
          <div class="location">
            <h2>{{ weather.name }}</h2>
            <div class="country-info">
              <p>{{ weather.sys.country }}</p>
              <country-flag :iso="weather.sys.country.toLowerCase()" size="small" />
            </div>
          </div>
        </div>
        <div class="temperature">
          <p>{{ convertTemp(weather.main.temp) }}</p>
        </div>
        <div class="details">
          <p><strong>Condition:</strong> {{ weather.weather[0].description }}</p>
          <p><strong>Wind:</strong> {{ weather.wind.speed }} m/s</p>
          <p><strong>Humidity:</strong> {{ weather.main.humidity }}%</p>
          <p><strong>Feels Like:</strong> {{ convertTemp(weather.main.feels_like) }}</p>
          <p><strong>Pressure:</strong> {{ weather.main.pressure }} hPa</p>
        </div>
        <q-btn
          @click="removeWidget(index)"
          label="Remove Widget"
          color="negative"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { QPage, QInput, QBtn, QIcon } from "quasar";
import { useWeatherStore } from "../stores/weatherStore";
import CountryFlag from "vue-country-flag-next";

const weatherStore = useWeatherStore();

const newLocation = ref("");

const weatherIconMapping = {
  Clear: "wb_sunny",
  Clouds: "cloud",
  Rain: "grain",
  Drizzle: "grain",
  Thunderstorm: "flash_on",
  Snow: "ac_unit",
  Mist: "blur_on",
  Smoke: "blur_on",
  Haze: "blur_on",
  Dust: "blur_on",
  Fog: "blur_on",
  Sand: "blur_on",
  Ash: "blur_on",
  Squall: "blur_on",
  Tornado: "toys",
};

const convertTemp = (tempInCelsius) => {
  return `${tempInCelsius.toFixed(1)} °C / ${(
    (tempInCelsius * 9) / 5 +
    32
  ).toFixed(1)} °F`;
};

const getWeatherIcon = (weatherMain) => {
  return weatherIconMapping[weatherMain] || "wb_cloudy";
};

const addWeatherWidget = async () => {
  await weatherStore.fetchWeather(newLocation.value);
  newLocation.value = "";
};

const removeWidget = (index) => {
  weatherStore.removeWidget(index);
};
</script>

<style scoped>
.input-section {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  padding: 12px;
  background-color: #e3f2fd;
  border-radius: 10px;
}

.widgets-section {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  padding: 24px;
  background-color: transparent;
  border-radius: 10px;
}

.weather-widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  width: 100%;
  padding: 20px;
  background-color: #00ffff3f;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  text-align: left;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.weather-widget .header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}

.weather-widget .location {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.weather-widget .location h2 {
  font-size: 1.6em;
  margin: 0;
  color: #1e88e5;
}

.weather-widget .location .country-info {
  display: flex;
  align-items: center;
  gap: 5px;
}

.weather-widget .location .country-info p {
  margin: 0;
  font-size: 1em;
  color: #424242;
}

.weather-widget .temperature p {
  font-size: 1.5em;
  font-weight: bold;
  margin: 12px 0;
  color: #e53935;
}

.weather-widget .details p {
  font-size: 0.95em;
  margin: 4px 0;
}

.country-info img {
  width: 24px;
  height: auto;
  border-radius: 50%;
}

</style>
