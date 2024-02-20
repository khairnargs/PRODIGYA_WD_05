async function getWeather() {
    const locationInput = document.getElementById("location-input").value;
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === "404") {
            document.getElementById("weather-info").innerHTML = "Location not found.";
            return;
        }

        const weatherInfo = `
            <h2>Current Weather in ${data.name}, ${data.sys.country}</h2>
            <p>Description: ${data.weather[0].description}</p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;

        document.getElementById("weather-info").innerHTML = weatherInfo;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
