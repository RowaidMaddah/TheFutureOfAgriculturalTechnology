document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "85c4f8a67b2c5386b15143a41dcd3417";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
    
    // Store current city globally in scope
    let currentCity = "Jeddah";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");

    let firstFetch = true; 
    let soilType = '';
    let selectedPlant = '';
    let temp = 0;
    let humidity = 0;
    let weatherCondition = '';

    const windSpeedChartCtx = document.getElementById("windSpeedChart").getContext("2d");
    const cloudCoverChartCtx = document.getElementById("cloudCoverChart").getContext("2d");
    const precipitationChartCtx = document.getElementById("precipitationChart").getContext("2d");

    let chartLabels = [];
    let windSpeedData = [];
    let cloudCoverData = [];
    let precipitationData = [];

    // Bind dropdown listeners ONCE outside fetchWeatherData
    const soilDropdown = document.getElementById('soilDropdown');
    const plantDropdown = document.getElementById('plantDropdown');
    
    if (soilDropdown) soilDropdown.addEventListener('change', handleSoilChange);
    if (plantDropdown) plantDropdown.addEventListener('change', handlePlantSelection);

    async function fetchWeatherData(city) {
        if (city && city.trim() !== "") {
            currentCity = city.trim();
        } else {
            city = currentCity;
        }

        try {
            const response = await fetch(`${apiUrl}&q=${encodeURIComponent(city)}&appid=${apiKey}`);
            if (!response.ok) {
                console.error("City not found");
                return;
            }
            var data = await response.json();
            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            temp = data.main.temp;
            humidity = data.main.humidity;
            const pressure = data.main.pressure;
            const windSpeed = data.wind.speed;
            const cloudCover = data.clouds.all;
            weatherCondition = data.weather[0].description;
            const precipitation = data.rain ? (data.rain['1h'] || 0) : 0;

            document.getElementById('temperature').textContent = `${temp} °C`;
            document.getElementById('humidity').textContent = `${humidity}%`;
            document.getElementById('pressure').textContent = `${pressure} hPa`;
            document.getElementById('weatherCondition').textContent = weatherCondition.charAt(0).toUpperCase() + weatherCondition.slice(1);

            const currentTime = getCurrentTime();
            chartLabels.push(currentTime);
            windSpeedData.push(windSpeed);
            cloudCoverData.push(cloudCover);
            precipitationData.push(precipitation);

            if (chartLabels.length > 10) {
                chartLabels.shift();
                windSpeedData.shift();
                cloudCoverData.shift();
                precipitationData.shift();
            }

            updateChart(windSpeedChartCtx, "Wind Speed (m/s) 🌪️", windSpeedData, chartLabels);
            updateChart(cloudCoverChartCtx, "Cloud Cover (%) ☁️", cloudCoverData, chartLabels);
            updateChart(precipitationChartCtx, "Precipitation (mm) 💦", precipitationData, chartLabels);

            evaluatePlantChoice(temp, humidity, weatherCondition);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }

    searchBtn.addEventListener("click", () => {
        if (searchBox.value.trim() !== "") {
            fetchWeatherData(searchBox.value.trim());
        }
    });

    searchBox.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && searchBox.value.trim() !== "") {
            fetchWeatherData(searchBox.value.trim());
        }
    });

    function handleSoilChange(event) {
        soilType = event.target.value;
        evaluatePlantChoice(temp, humidity, weatherCondition); 
    }

    function handlePlantSelection(event) {
        selectedPlant = event.target.value;
        evaluatePlantChoice(temp, humidity, weatherCondition); 
    }

    function evaluatePlantChoice(temperature, humidity, weatherCondition) {
        if (!soilType || !selectedPlant) {
            document.getElementById('plantMessage').textContent = 'Is your plant suitable for your region? 🤔';
            return;
        }

        let recommendationMessage = '';
        const roundedTemp = Math.round(temperature * 10) / 10;

        console.log("Rounded temperature: ", roundedTemp);

        if (soilType === 'Loam') {
            if (roundedTemp >= 20 && roundedTemp <= 30) {
                if (selectedPlant === "Corn") {
                    recommendationMessage = 'Great choice! Corn grows well in Loamy soil and warm temperatures.';
                } else if (selectedPlant === 'Wheat') {
                    recommendationMessage = 'Good choice! Wheat also thrives in Loamy soil and moderate temperatures.';
                } else if (selectedPlant === 'Basil') {
                    recommendationMessage = 'Perfect! Basil enjoys warm temperatures and Loamy soil.';
                } else if (selectedPlant === 'Radish') {
                    recommendationMessage = 'Good choice! Radish can grow well in Loamy soil and moderate temperatures.';
                } else if (selectedPlant === 'Carrot') {
                    recommendationMessage = 'Good choice! Carrot prefers Loamy soil and consistent moisture levels.';
                } else if (selectedPlant === 'Potatoes') {
                    recommendationMessage = 'Good choice! Potatoes grow well in Loamy soil and moderate temperatures.';
                } else if (selectedPlant === 'Sunflowers') {
                    recommendationMessage = 'Good choice! Sunflowers prefer Loamy soil and full sun.';
                } else if (selectedPlant === 'Pumpkin') {
                    recommendationMessage = 'Good choice! Pumpkin grows well in Loamy soil and warm temperatures.';
                } else if (selectedPlant === 'Violet') {
                    recommendationMessage = 'Perfect! Violet enjoys Loamy soil and consistent moisture levels.';
                } else if (selectedPlant === 'Jasmine') {
                    recommendationMessage = 'Good choice! Jasmine prefers Loamy soil and moderate temperatures.';
                } else if (selectedPlant === 'Poppy') {
                    recommendationMessage = 'Good choice! Poppy grows well in Loamy soil and moderate temperatures.';
                } else if (selectedPlant === 'Cabbage') {
                    recommendationMessage = 'Good choice! Cabbage prefers Loamy soil and consistent moisture levels.';
                } else {
                    recommendationMessage = 'This plant may not be the best choice for Loamy soil and current conditions.';
                }
            } else {
                recommendationMessage = 'This temperature range may not be ideal for most plants in Loamy soil.';
                if (roundedTemp < 20) {
                    if (selectedPlant === 'Basil') {
                        recommendationMessage = 'Basil may struggle in cold temperatures with Loamy soil.';
                    } else if (selectedPlant === 'Sunflowers') {
                        recommendationMessage = 'Sunflowers may not thrive in cold temperatures with Loamy soil.';
                    } else if (selectedPlant === 'Pumpkin') {
                        recommendationMessage = 'Pumpkin may not grow well in cold temperatures with Loamy soil.';
                    } else {
                        recommendationMessage = 'This plant may not thrive in cold temperatures with Loamy soil.';
                    }
                } else if (roundedTemp > 30) {
                    if (selectedPlant === 'Radish') {
                        recommendationMessage = 'Radish may bolt in hot temperatures with Loamy soil.';
                    } else if (selectedPlant === 'Carrot') {
                        recommendationMessage = 'Carrot may become bitter in hot temperatures with Loamy soil.';
                    } else if (selectedPlant === 'Potatoes') {
                        recommendationMessage = 'Potatoes may become diseased in hot temperatures with Loamy soil.';
                    } else {
                        recommendationMessage = 'This plant may not thrive in hot temperatures with Loamy soil.';
                    }
                }
            }
        } else if (soilType === 'Clay') {
            if (roundedTemp < 20) {
                if (selectedPlant === 'Cactus') {
                    recommendationMessage = 'Perfect! Cacti love dry, clay-like soil and cooler weather.';
                } else if (selectedPlant === 'Corn') {
                    recommendationMessage = 'Good choice! Corn grows well in clay soil and cooler temperatures.';
                } else if (selectedPlant === 'Basil') {
                    recommendationMessage = 'Good choice! Basil prefers clay soil and moderate temperatures.';
                } else if (selectedPlant === 'Radish') {
                    recommendationMessage = 'Good choice! Radish grows well in clay soil and cooler temperatures.';
                } else if (selectedPlant === 'Carrot') {
                    recommendationMessage = 'Good choice! Carrot prefers clay soil and consistent moisture levels.';
                } else if (selectedPlant === 'Potatoes') {
                    recommendationMessage = 'Perfect! Potatoes grow well in clay soil and cooler temperatures.';
                } else if (selectedPlant === 'Jasmine') {
                    recommendationMessage = 'Perfect! Jasmine prefers clay soil and moderate temperatures.';
                } else if (selectedPlant === 'Poppy') {
                    recommendationMessage = 'Good choice! Poppy grows well in clay soil and cooler temperatures.';
                } else if (selectedPlant === 'Cabbage') {
                    recommendationMessage = 'Good choice! Cabbage prefers clay soil and consistent moisture levels.';
                } else {
                    recommendationMessage = 'This plant may not thrive in clay soil and current weather conditions.';
                }
            } else {
                recommendationMessage = 'Clay soil is better suited for cooler weather and may not work well in hot temperatures.';
            }
        } else if (soilType === 'Sandy') {
            if (roundedTemp >= 20 && roundedTemp <= 35) {
                if (selectedPlant === "Cactus") {
                    recommendationMessage = 'Excellent! Cactus thrives in warm temperatures and sandy soil.';
                } else if (selectedPlant === 'Watermelon') {
                    recommendationMessage = 'Perfect! Watermelon grows well in sandy soil and warm temperatures.';
                } else if (selectedPlant === 'Sugarcane') {
                    recommendationMessage = 'Perfect! Sugarcane thrives in warm temperatures and sandy soil.';
                } else {
                    recommendationMessage = 'This plant may not be the best choice for sandy soil and current conditions.';
                }
            } else {
                recommendationMessage = 'Sandy soil is best suited for warm weather.';
            }
        } else if (soilType === "Peat") {
            if (roundedTemp >= 15 && roundedTemp <= 25) {
                if (selectedPlant === "Corn") {
                    recommendationMessage = 'Good choice! Corn grows well in moist peat soil and warm temperatures.';
                } else {
                    recommendationMessage = 'This plant may not be the best choice for peat soil and current weather conditions.';
                }
            } else {
                recommendationMessage = 'Peat soil is best suited for temperate conditions.';
            }
        } else {
            recommendationMessage = 'This soil type may not work well with the current weather or plant selection.';
        }

        document.getElementById('plantMessage').textContent = recommendationMessage;
    }

    function getCurrentTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    function updateChart(context, label, data, labels) {
        if (!context.chart) {
            context.chart = new Chart(context, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: label,
                        data: data,
                        backgroundColor: "#4bdd98",
                        borderColor: "#000000",
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: { color: "white" }
                        },
                        x: {
                            ticks: { color: "white" }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: { color: "white" }
                        }
                    }
                }
            });
        } else {
            context.chart.data.labels = labels;
            context.chart.data.datasets[0].data = data;
            context.chart.update();
        }
    }

    const dropdownBtn = document.querySelector('.dropdown-button');
    if (dropdownBtn) {
        dropdownBtn.addEventListener('click', function() {
            const content = document.querySelector('.content');
            if (content) {
                content.classList.toggle('show');
                dropdownBtn.textContent = content.classList.contains('show') ? '↑' : '↓';
            }
        });
    }

    // --- Notepad Logic ---
    const notesContainer = document.querySelector(".notes-container");
    const createBtn = document.querySelector(".btn");

    if (createBtn && notesContainer) {
        createBtn.addEventListener("click", () => {
            let noteWrapper = document.createElement("div");
            noteWrapper.className = "input-box";
            noteWrapper.style.position = "relative";
            noteWrapper.style.marginBottom = "15px";

            let textContainer = document.createElement("div");
            textContainer.contentEditable = "true";
            textContainer.style.outline = "none";
            textContainer.style.minHeight = "80px";
            textContainer.style.color = "#ffffff";

            let deleteBtn = document.createElement("span");
            deleteBtn.innerHTML = "🗑️";
            deleteBtn.style.position = "absolute";
            deleteBtn.style.bottom = "10px";
            deleteBtn.style.right = "15px";
            deleteBtn.style.cursor = "pointer";

            deleteBtn.addEventListener("click", () => {
                noteWrapper.remove();
            });

            noteWrapper.appendChild(textContainer);
            noteWrapper.appendChild(deleteBtn);
            notesContainer.appendChild(noteWrapper);

            textContainer.focus();
        });
    }

    // Initial load
    fetchWeatherData(currentCity);

    // Update every 12 seconds
    setInterval(() => {
        fetchWeatherData(currentCity); 
    }, 12000);
});
