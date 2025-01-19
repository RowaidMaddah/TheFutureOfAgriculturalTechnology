document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "85c4f8a67b2c5386b15143a41dcd3417";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
  
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
  
    async function fetchWeatherData(city) {
            // Check if the city is undefined or empty and set a default value
    if (!city || city.trim() === "") {
        city = 'Riyadh'; // Set your preferred default city
    }
      try {
        const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
        var data = await response.json();
        console.log(data);
  
        document.querySelector(".city").innerHTML = data.name;
        temp = data.main.temp;
        humidity = data.main.humidity;
        const pressure = data.main.pressure;
        const windSpeed = data.wind.speed;
        const cloudCover = data.clouds.all;
        weatherCondition = data.weather[0].description;
        const precipitation = data.rain ? data.rain['1h'] : 0;
  
        document.getElementById('temperature').textContent = `${temp} °C`;
        document.getElementById('humidity').textContent = `${humidity}%`;
        document.getElementById('pressure').textContent = `${pressure} hPa`;
        document.getElementById('weatherCondition').textContent = weatherCondition.charAt(0).toUpperCase() + weatherCondition.slice(1);
  
        document.getElementById('soilDropdown').addEventListener('change', handleSoilChange);
        document.getElementById('plantDropdown').addEventListener('change', handlePlantSelection);
  
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
  
    searchBtn.addEventListener("click", ()=>{
      fetchWeatherData(searchBox.value);
    })

    
  
    function handleSoilChange(event) {
      soilType = event.target.value;
      evaluatePlantChoice(temp, humidity, weatherCondition); // Pass current weather data
    }
  
    function handlePlantSelection(event) {
      selectedPlant = event.target.value;
      evaluatePlantChoice(temp, humidity, weatherCondition); // Pass current weather data
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
          // Plant recommendations based on Loamy soil and temperature
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
            // Cold recommendations
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
            // Hot recommendations
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
          // Cold clay recommendations
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
          if (roundedTemp >= 20 && roundedTemp <= 25) {
            if (selectedPlant === 'Basil') {
              recommendationMessage = 'Basil may struggle in hot temperatures with clay soil.';
            } else if (selectedPlant === 'Radish') {
              recommendationMessage = 'Radish may bolt in hot temperatures with clay soil.';
            } else if (selectedPlant === 'Poppy') {
              recommendationMessage = 'Poppy may not thrive in hot temperatures with clay soil.';
            } else {
              recommendationMessage = 'This plant may not thrive in hot temperatures with clay soil.';
            }
          } else if (roundedTemp > 25) {
            if (selectedPlant === 'Corn') {
              recommendationMessage = 'Corn may become diseased in hot temperatures with clay soil.';
            } else if (selectedPlant === 'Carrot') {
              recommendationMessage = 'Carrot may become bitter in hot temperatures with clay soil.';
            } else if (selectedPlant === 'Cabbage') {
              recommendationMessage = 'Cabbage may become diseased in hot temperatures with clay soil.';
            } else {
              recommendationMessage = 'This plant may become diseased in hot temperatures with clay soil.';
            }
          }
        }
      } else if (soilType === 'Sandy') {
        if (roundedTemp >= 20 && roundedTemp <= 35) {
          // Plant recommendations for Sandy soil
          if (selectedPlant === "Cactus") {
            recommendationMessage = 'Excellent! Cactus thrives in warm temperatures and sandy soil.';
          } else if (selectedPlant === 'Watermelon') {
            recommendationMessage = 'Perfect! Watermelon grows well in sandy soil and warm temperatures.';
          } else if (selectedPlant === 'Sugarcane') {
            recommendationMessage = 'Perfect! Sugarcane thrives in warm temperatures and sandy soil.';
          } else if (selectedPlant === 'Radish') {
            recommendationMessage = 'Good choice! Radish can grow well in sandy soil and warm temperatures.';
          } else if (selectedPlant === 'Basil') {
            recommendationMessage = 'Good choice! Basil prefers sandy soil and moderate temperatures.';
          } else if (selectedPlant === 'Carrot') {
            recommendationMessage = 'Good choice! Carrot can grow in sandy soil and consistent moisture levels.';
          } else if (selectedPlant === 'Potatoes') {
            recommendationMessage = 'Good choice! Potatoes can grow in sandy soil and moderate temperatures.';
          } else if (selectedPlant === 'Poppy') {
            recommendationMessage = 'Good choice! Poppy grows well in sandy soil and warm temperatures.';
          } else if (selectedPlant === 'Jasmine') {
            recommendationMessage = 'Good choice! Jasmine prefers sandy soil and moderate temperatures.';
          } else {
            recommendationMessage = 'This plant may not be the best choice for sandy soil and current conditions.';
          }
        } else {
          recommendationMessage = 'Sandy soil is best suited for warm weather and may not work well in cold temperatures.';
          if (roundedTemp < 20) {
            if (selectedPlant === 'Basil') {
              recommendationMessage = 'Basil may struggle in cold temperatures with sandy soil.';
            } else if (selectedPlant === 'Poppy') {
              recommendationMessage = 'Poppy may not thrive in cold temperatures with sandy soil.';
            } else {
              recommendationMessage = 'This plant may not thrive in cold temperatures with sandy soil.';
            }
          } else if (roundedTemp > 35) {
            if (selectedPlant === 'Corn') {
              recommendationMessage = 'Corn may become diseased in hot temperatures with sandy soil.';
            } else if (selectedPlant === 'Cabbage') {
              recommendationMessage = 'Cabbage may become diseased in hot temperatures with sandy soil.';
            } else if (selectedPlant === 'Radish') {
              recommendationMessage = 'Radish may bolt in hot temperatures with sandy soil.';
            } else {
              recommendationMessage = 'This plant may become diseased in hot temperatures with sandy soil.';
            }
          }
        }
      } else if (soilType === "Peat") {
        if (roundedTemp >= 15 && roundedTemp <= 25) {
          if (selectedPlant === "Corn") {
            recommendationMessage = 'Good choice! Corn grows well in moist peat soil and warm temperatures.';
          } else if (selectedPlant === 'Basil') {
            recommendationMessage = 'Good choice! Basil prefers peat soil and moderate temperatures.';
          } else if (selectedPlant === 'Radish') {
            recommendationMessage = 'Good choice! Radish can grow well in peat soil and warm temperatures.';
          } else if (selectedPlant === 'Carrot') {
            recommendationMessage = 'Perfect! Carrot grows well in peat soil and consistent moisture levels.';
          } else if (selectedPlant === 'Potatoes') {
            recommendationMessage = 'Perfect! Potatoes prefer peat soil and cooler temperatures.';
          } else if (selectedPlant === 'Cabbage') {
            recommendationMessage = 'Perfect! Cabbage prefers peat soil and consistent moisture levels.';
          } else if (selectedPlant === 'Jasmine') {
            recommendationMessage = 'Perfect! Jasmine grows well in peat soil and moderate temperatures.';
          } else {
            recommendationMessage = 'This plant may not be the best choice for peat soil and current weather conditions.';
          }
        } else {
          recommendationMessage = 'Peat soil is best suited for temperate conditions and may not work well in extreme temperatures.';
          if (roundedTemp < 15) {
            if (selectedPlant === 'Basil') {
              recommendationMessage = 'Basil may struggle in cold temperatures with peat soil.';
            } else if (selectedPlant === 'Poppy') {
              recommendationMessage = 'Poppy may not thrive in cold temperatures with peat soil.';
            } else {
              recommendationMessage = 'This plant may not thrive in cold temperatures with peat soil.';
            }
          } else if (roundedTemp > 25) {
            if (selectedPlant === 'Corn') {
              recommendationMessage = 'Corn may become diseased in hot temperatures with peat soil.';
            } else if (selectedPlant === 'Cabbage') {
              recommendationMessage = 'Cabbage may become diseased in hot temperatures with peat soil.';
            } else if (selectedPlant === 'Radish') {
              recommendationMessage = 'Radish may bolt in hot temperatures with peat soil.';
            } else {
              recommendationMessage = 'This plant may become diseased in hot temperatures with peat soil.';
            }
          }
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
              borderColor: "#000000", // Border color for line
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                min: 0,
                max: Math.max(Math.max(...data), 100), // Adjust y-values dynamically
                ticks: {
                  color: "white", // Make sure y-axis labels are white
                  stepSize: 1, // Defines the step size for the y-axis labels (you can adjust this as needed)
                }
              },
              x: {
                ticks: {
                  color: "white" // Make sure x-axis labels are white
                }
              }
            },
            plugins: {
              legend: {
                labels: {
                  color: "white" // White color for legend text
                }
              }
            }
          }
        });
      } else {
        // If chart exists, update it
        context.chart.data.labels = labels;
        context.chart.data.datasets[0].data = data;
        context.chart.update(); // Update chart
      }
    }
  
  
    // Update every 12 seconds
    setInterval(fetchWeatherData, 12000);
  
    document.querySelector('.dropdown-button').addEventListener('click', function() {
      const content = document.querySelector('.content');
      const content2 = document.querySelector('.content2')
      const button = document.querySelector('.dropdown-button');
  
      // Toggle visibility of the content
      content.classList.toggle('show');
  
      // Change button text based on the state of the content
      if (content.classList.contains('show')) {
        button.textContent = '↑'; // Change to "up" arrow when content is shown
      } else {
        button.textContent = '↓'; // Change back to "down" arrow when content is hidden
      }
    });
  });
  
  const notesContainer = document.querySelector(".notes-container");
  const createBtn = document.querySelector(".btn");
  
  // Function to create a new note
  createBtn.addEventListener("click", () => {
    // Create a new paragraph element for the input box
    let inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
  
    // Create the delete icon image
    let img = document.createElement("img");
    img.src = "C:\\Users\\mmadd\\OneDrive\\Pictures\\delete.png"; // Use a valid image source
    img.alt = "Delete Note";
    img.style.cursor = "pointer"; // Suggest to the user that this element is clickable
  
    // Append the image to the inputBox
    inputBox.appendChild(img);
  
    // Append the inputBox to the notesContainer
    notesContainer.appendChild(inputBox);
  
    // Focus on the newly created input box
    inputBox.focus();
  });
  
  // Handle click event on notesContainer for delete icon
  notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
      // Check if the clicked element is an image (delete button)
      const noteToDelete = e.target.parentElement; // Get the parent <p> element
      notesContainer.removeChild(noteToDelete); // Remove the entire note
    }
  });
  
  // Prevent default Enter key behavior within notes.
  notesContainer.addEventListener("keypress", function(e) {
    if (e.key === "Enter" && e.target.classList.contains("input-box")) {
      e.preventDefault(); // Prevent the default behavior of Enter
    }
  });


  fetchWeatherData(city); // Set default city

    // Update every 12 seconds using the city from the search box or default to 'London'
    setInterval(() => {
        fetchWeatherData(searchBox.value); 
    }, 12000);
