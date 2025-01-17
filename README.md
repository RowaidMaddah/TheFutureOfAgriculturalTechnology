This is a website for farmers to use around the world to educate them about latest farming 'tech' advancements.



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Smart station website with real-time weather monitoring.">
  <title>Smart Weather Station</title>
  <link rel="stylesheet" href="styles.css">
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <header>
    <h1>Smart Weather Station</h1>
    <h2>The Future of Agriculture with Real-Time Monitoring</h2>
  </header>
  <main>
    <section id="about-us">
        <div class="container1">
            <h1>About Us</h1>
            <p>Welcome to our website, our goal is to further utilise technology to improve the quality of products by notifying farmers of the latest weather and 'tech' advancements in the agricultural community!</p>
        </div>
    </section>
    <h2>
      <strong>Location: Riyadh, KSA </strong>
    </h2>
    <section class="overview">
      <div class="card">
        <h3>Temperature ☀️</h3>
        <p id="temperature"></p>
      </div>
      <div class="card">
        <h3>Humidity 💦</h3>
        <p id="humidity"></p>
      </div>
      <div class="card">
        <h3>Pressure 🌡️</h3>
        <p id="pressure"></p>
      </div>
     
      <div class="card">
        <h3>Weather Condition 🗿</h3>
        <p id="weatherCondition"></p>
      </div>
    </section>
      <section class="charts">
        <h2>Weather Trends</h2>
        <canvas id="windSpeedChart"></canvas>
        <canvas id="cloudCoverChart"></canvas>
        <canvas id="precipitationChart"></canvas>
      </section>
      <section class = "details">
        <h3>Extra details</h3>
        <div id="weatherDetails">
            <ul>
                <li><strong>Geographic land: </strong>Sandy 🐪</li>
                <li><strong>Moisture condition: </strong>Dry 🏜️</li>
                <li><strong>Sunrise Time: </strong> 6:28 AM🌅</li>
                <li><strong>Sunset Time: </strong>5:07 PM🌇</li>
            </ul>
        </div>
      </section>
        <section class="plant-selection">
          <h2>Select a Crop Type 🍉</h2>
          <select id="plantDropdown" aria-label="Select a crop type">
            <option value="">-- Choose a crop --</option>
            <option value="Cactus">Cactus</option>
            <option value="Corn">Corn</option>
            <option value="Wheat">Wheat</option>
            <option value="Carrot">Carrot</option>
            <option value="Potatoes">Potatoes</option>
            <option value="Radish">Radish</option>
            <option value="Onions">Onions</option>
            <option value="Bamboo">Bamboo</option>
            <option value="Sugar Cane">SugarCane</option>
            <option value="Rice">Rice</option>
            <option value="Basil">Basil</option>
            <option value="Mint">Mint</option>
            <option value="Aloe Vera">Aloe Vera</option>
            <option value="Sunflowers">Sunflowers</option>
            <option value="Watermelon">Watermelon</option>
            <option value="Pumpkin">Pumpkin</option>
            <option value="Poppy">Poppy</option>
            <option value="Violet">Violet</option>
            <option value="Jasmine">Jasmine</option>
            <option value="Cabbage">Cabbage</option>
          </select>
        </section>
        <section class = "soil-selection">
          <h2>Select a Soil Type 🌱</h2>
          <select id="soilDropdown" aria-label="Select a soil type">
            <option value = "">-- Choose a soil type --</option>
            <option value = "Loam">Loam</option>
            <option value = "Clay">Clay</option>
            <option value = "Sandy">Sandy</option>
            <option value = "Silty">Silty</option>
            <option value = "Chalk">Chalk</option>
            <option value = "Peat">Peat</option>
          </select>
        </section>
        <p id= "plantMessage"></p>

        <section class = "trends">
            <h1>Top Agricultural Trends</h1>
            <div id = "Sugarcane">
                <h2>#1 Sugarcane 🍭</h2>
                <p>Sugarcane is the world's most consumed crop, and is the world's largest agricultural product by volume, it represents 80% of the world's sugar production, which is worth $67 billion! It often reaches 4.6 billion tons of production volume annually, mainly concentrated in Asia and Latin-America, owing to the crop's preference for warm climate.</p>
                <p><strong>Price: </strong>based on FAO and IGC data, sugarcanes are valued at $130 per ton and sold in the market on average for $140 to $180.</p>
                <p>Here are the most widely-trending and well-researched genetic modifications for sugarcanes: </p>
                <ul id="sugarcane">
                    <li><strong>Sugar Cane Mosaic Virus Resistance (SCMVR)</strong> helps increase resistance to multiple popular diseases found in sugarcanes, it can be done by CRISPR Cas-9 to activate sugarcanes own defence pathways against viral infections. This genetic modification allows you to produce more sugarcane without the death or disposal of infected sugarcanes.</li>
                    <p></p>
                    <li><strong>Heat Shock Protein-70 (HSP70)</strong> helps in protein stability during heat-stressful situations (extremely high temperatures), it can be insterted into sugarcanes using Agrobacterium-mediated transformation using rice or soybeans.</li>
                    <p></p>
                    <li><strong>Dehydration Responsive Element Binding Protein 1A (DREBP1A)</strong> helps withstanding droughts or other water-heavy situations. This gene can be inserted into sugarcane using Agrobacterium-mediated transformation too; the gene activates pathways that help plants tolerate water stress by maintaining cell hydration.</li>
                </ul>
            </div>
            <div id = "Corn">
                <h2>#2 Corn 🌽</h2>
                <p>Corn is the world's second most produced crop, the U.S continues to hold the title for the most corn-producing country, accounting for 40% of the world's corn production, followed by China and Brazil. Cornfields often stretch out to millions of acres, making them the top 1 most versatile crop in history.</p>
                <p><strong>Price: </strong>based on FAO and IGC data, corn is valued at $143 per ton and sold in the market on average for $240 to $280.</p>
                <p>Here are the most widely-trending and well-researched genetic modifications for corn: </p>
                <ul id = "corn">
                    <li><strong>Bacillus Thuringiensis Resistance (Bt Corn)</strong> helps increase pest-resistance, which lowers cost, improves quality and crop health, while simultaneously creates a better environment for other crops by reducing chemical usages. This gene can be found in Bacillus Thuringiensis bacteria and can be introduced using Agrobacterium-mediated transformation.</li>
                    <p></p>
                    <li><strong>Brassinosteroid Insensitive 1 (BRI1)</strong> helps increase biomass production by improving growth and yield efficieny, using a receptor (Brassinosteroid Insensitive 1) involved in regulating plant growth and biomass production. This can be achieved by overexpressing this receptor/gene.</li>
                    <p></p>
                    <li><strong>Dehydration Responsive Element Binding Protein 1A (DREBP1A)</strong> helps withstanding droughts or other water-heavy situations. This gene can be inserted into corn using Agrobacterium-mediated transformation too; the gene activates pathways that help plants tolerate water stress by maintaining cell hydration.</li>
                </ul>
            </div>
            <div id = "Wheat">
                <h2>#3 Wheat 🥖</h2>
                <p>Wheat is a foundational crop in human history, dating all the way back to the very first agricultural revolutions, even now it is still very popular and trending among the cultivation community. Annually, about 770 million tons of it is produced.</p>
                <p><strong>Price: </strong>based on FAO and IGC data, sugarcanes are valued at $221 per ton and sold in the market on average for $230 to $280.</p>
                <p>Here are the most widely-trending and well-researched genetic modifications for wheat: </p>
                <ul id = "wheat">
                    <li><strong>Fusarium Head Blight Resistance (Fungal Resistance)</strong> helps resist a major fungal disease found in wheat and other cereals. This gene is typically found in Triticum dicoccoides, which is a type of wheat. You can insert this gene by breeding or by utilising CRISPT to edit in the gene, reducing chemical usages.</li>
                    <p></p>
                    <li><strong>Nitrate Transporter 1.1 (NRT1.1)</strong> helps increase nitrogen efficiency by improving the way it takes up nitrogen from it's soil. This helps reduce the need for chemical fertilizers and decreases pollution. Overexpressing this natural gene will result in this.</li>
                    <p></p>
                    <li><strong>Ribulose-1,5-bisphosphate carboxylase/oxygenase (Rubisco)</strong> helps improve carbon fixation and enhancing photosynthesis. Enhancing or overexpressing this gene improves the crop all around, leading to faster growth, increased quality, cheaper cost and overall more environmental friendly.</li>
                    <p></p>
                </ul>
            </div>
            <div id = "Rice">
                <h2>#4 Rice 🍚</h2>
                <p>Rice is a dietary staple for more than half of the world's population, concentrated in Asia, with the lead producers being India, China and Indonesia. Annually, about 750 million tons of rice is produced.</p>
                <p><strong>Price: </strong>based on FAO and IGC data, sugarcanes are valued at $234 per ton and sold in the market on average for $230 to $280.</p>
                <p>Here are the most widely-trending and well-researched genetic modifications for rice: </p>
                <ul id = "rice">
                    <li><strong>Magnaporthe oryzae Resistance (Pi54)</strong> helps resist against the rice-blast disease caused by the fungus Magnaporthe oryzae. Pi54 is naturally found in rice, to enhance it's effect and improve the rice's protection against this disease, overexpress it.</li>
                    <p></p>
                    <li><strong>Phosphate Transporter 1 (PHT1)</strong> helps better use Phosphorus from it's soil. This gene is already found in rice and can be overexpressed to improve its phosphorus intake.</li>
                    <p></p>
                    <li><strong>Phytoene Synthase (PSY) and Carotene Desaturase (CRTI)</strong> both help increase the production of Provitamin A (Beta-Carotene), PSY genes can be found in Daffodil flowers while CRTI can be found in Erwinia uredovora's, the combination of these 2 genes also creates a golden-like appearance in genes.</li>
                    <p></p>
                </ul>
            </div>
            <div id = "potatoes">
                <h2>#5 Potato 🥔</h2>
                <p>Potatoes are one of the world's most widely grown tuber crops, they can thrive in diverse and various climates. The lead productors are areas such as Russia, India and China. The potato has shaped cuisines around the world and will forever be in the people's hearts.</p>
                <p><strong>Price: </strong>based on FAO and IGC data, potatoes are valued at $3.50 to $4.50 per ton and sold in the market on average for about $2000, this price variation is due to supply and demand, with potatoes being some of the current most demanded vegetable on the planet.</p>
                <p>Here are the most widely-trending and well-researched genetic modifications for potatoes: </p>
                <ul id = "potato">
                    <li><strong>Asparagine Synthase (Asn1)</strong> reducing it helps prevent Acrylamide formation, the formation of harmful compounds during cooking. This can be done silencing the gene with RNAi.</li>
                    <p></p>
                    <li><strong>Cycling DOF Factor 1 (StCDF1)</strong> is the gene involved in dormancy regulation, silencing this gene using RNAi can help prolong dormancy and prevent sprouting, ultimately keeping it's shape for longer periods of time and easens storing.</li>
                    <p></p>
                    <li><strong>R genes (Rpi-blb1, Rpi-blb2, Rpi-vnt1)</strong> when introduced using method's like CRISPR gene-editing will resist against the fungus Phytophthora Infestans which causes late blight, and is hazardous for potato-dependent communities.</li>
                    <p></p>
                </ul>
            </div>
            </section>
        </section>
        <div class = "dropdown-container">
            <h2 class = "title">Are GMO's safe?</h2>
            <p class = "content">There is a common misconception that GMO's are typically worse for your health, but actually, they prevent ton's of diseases and help us make much better use of our technology and farmlands.</p>
            <button class="dropdown-button">↓</button>
        </div>
        <h1></h1>
        <h1><strong>Calculator</strong></h1>
        <h2>Use the notes and calculator below for any needed yield calculations!</h2>
        <div class = "Calculator">
          <div class = "calculator">
            <form>
              <div class = "display">
                <input type = "text" name = "display">
              </div>
              <div>
                <input type = "button" value = "AC" onclick = "display.value = '' " class = "yeah">
                <input type = "button" value = "DE" onclick = "display.value = display.value.toString().slice(0, -1)" class = "yeah">
                <input type = "button" value = "." onclick = "display.value +='.'" class = "yeah">
                <input type = "button" value = "/" onclick = "display.value += '/'" class = "yeah">
              </div>
              <div>
                <input type = "button" value = "7" onclick = "display.value += '7'">
                <input type = "button" value = "8" onclick = "display.value += '8'">
                <input type = "button" value = "9" onclick = "display.value += '9'">
                <input type = "button" value = "*" onclick = "display.value += '*'" class = "yeah">
              </div>
              <div>
                <input type = "button" value = "4" onclick = "display.value += '4'">
                <input type = "button" value = "5" onclick = "display.value += '5'">
                <input type = "button" value = "6" onclick = "display.value += '6'">
                <input type = "button" value = "-" onclick = "display.value += '-'" class = "yeah">
              </div>
              <div>
                <input type = "button" value = "1" onclick = "display.value += '1'">
                <input type = "button" value = "2" onclick = "display.value += '2'">
                <input type = "button" value = "3" onclick = "display.value += '3'">
                <input type = "button" value = "+" onclick = "display.value += '+'" class = "yeah">
              </div>
              <div>
                <input type = "button" value = "00" onclick = "display.value += '00'">
                <input type = "button" value = "0" onclick = "display.value += '0'">
                <input type = "button" value = "=" onclick  = "display.value = eval(display.value)" class = "equal">
              </div>
            </form>
          </div>
        </div>
        <div class = "container">
          <h1>📑 Notes</h1>
          <button class = "btn">🔨 Create Notes</button>
          <div class = "notes-container">
          </div>
        </div>
  </main>
  <footer>
    <p>Powered by <strong>HTML, CSS, and JavaScript</strong> | Developed by <strong>Rowaid Maddah</strong> Group 3 (10Q)</p>
  </footer>
  <script src="app.js" defer></script>
</body>
</html>


<script>
  document.addEventListener("DOMContentLoaded", () => {
    const API_KEY = "85c4f8a67b2c5386b15143a41dcd3417";
    const CITY_NAME = "Riyadh";
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`;
  
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
  
    async function fetchWeatherData() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
  
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
                max: Math.max(Math.max(...data), 50), // Adjust y-values dynamically
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
  
    // Initial data fetch
    fetchWeatherData();
  
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
  
  createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "C:\\Users\\mmadd\\OneDrive\\Pictures\\delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
  });
  
  notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
      e.target.parentElement.remove();
    }
  });
</script>

<style>
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    background-image: url('https://wallpaperaccess.com/full/1551423.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: #e5e5e5;
    overflow-x: hidden;
  }
  
  
  header {
    text-align: center;
    padding: 20px;
    background: #27a162;
    color: #e5e5e5;
  }
  
  
  header h1 {
    font-size: 2.5em;
    margin: 0;
    animation: fadeIn 3.5s ease-in-out;
  }
  
  
  header h2 {
    font-size: 1.5em;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  
  
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  
  #about-us h1 {
    font-size: 36px;
    margin-bottom: 20px;
    color: #e5e5e5;
    text-align: center;
  }
  
  
  #about-us {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    padding: 40px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    max-width: 1200px;
    margin: 40px auto;
    animation: fadeIn 3s ease-in-outl;
    text-align: center;
  }
  
  
  .overview {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 30px;
    animation: fadeIn 2.5s ease-out;
  }
  
  
  .card {
    background: #27a162;
    border-radius: 12px;
    padding: 20px;
    margin: 20px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    width: 200px;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
  }
  
  
  .card h2 {
    margin-bottom: 10px;
  }
  
  .card p {
    font-size: 1.5em;
    font-weight: bold;
    color: #e5e5e5;
  }
  
  
  .charts {
    width: 50%;
    max-width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex;
  }
  
  
  canvas {
    width: 100%;
    height: auto;
    margin: 20px;
  }
  
  
  footer {
    text-align: center;
    padding: 10px;
    background: #27a162;
    color: #e5e5e5;
  }
  
  
  #plantDropdown {
    padding: 10px;
    text-align: center;
    border-radius: 12px;
    font-size: 1.1em;
    width: 250px;
    margin-top: 10px;
    background-color: #27a162;
    color: #e5e5e5;
    border: none;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 1);
    animation: fadeIn 3.5s ease-in-out;
    margin: 20px;
    }
   
  
    .plant-selection {
    margin-top: 30px;
    border-radius: 12px;
    text-align: center;
    background-color: #27a162;
    box-shadow: 0 1px 2px rgba(0,0,0,1);
    animation: fadeIn 2.5s ease-in-out;
    margin: 20px;
    transition: transform 0.3s, box-shadow 0.3s;
    }
  
  
    .plant-selection:hover {
      transform: translateY(-10px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
    }
   
  
    #plantMessage {
    margin-top: 20px;
    font-size: 1.2em;
    font-weight: bold;
    color: #e5e5e5;
    margin: 20px;
    }
  
  
    #soilDropdown {
      padding: 10px;
      text-align: center;
      border-radius: 12px;
      font-size: 1.1em;
      width: 250px;
      margin-top: 10px;
      background-color: #27a162;
      color: #e5e5e5;
      border: none;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 1);
      animation: fadeIn 3.5s ease-in-out;
      margin: 20px;
      transition: transform 0.3s, box-shadow 0.3s;
      }
  
  
    .soil-selection {
      margin-top: 30px;
      border-radius: 12px;
      text-align: center;
      background-color: #27a162;
      box-shadow: 0 1px 2px rgba(0,0,0,1);
      animation: fadeIn 2.5s ease-in-out;
      margin: 20px;
      transition: transform 0.3s, box-shadow 0.3s;
    }
  
   
  
  .soil-selection:hover{
    transform: translateY(-10px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
  }
  
  
    .details {
      background-color: #27a162; /* Green background matching the theme */
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Slight shadow to make it stand out */
      width: 40%; /* Adjust width to give it space */
      margin: 20px 0;
      animation: fadeIn 2.5s ease-in-out;
      text-align: left;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
   
   
    .details-title {
      font-size: 1.8em; /* Larger font size for the title */
      color: #e5e5e5;
      font-weight: bold;
      margin-bottom: 20px; /* More space below the title */
      text-align: center; /* Center the title */
      letter-spacing: 2px; /* Add letter-spacing to make the title feel more polished */
    }
   
  
    #weatherDetails ul {
      list-style-type: none; /* Remove default bullet points */
      padding-left: 0;
      font-size: 1.1em; /* Slightly larger font for better readability */
      margin: 0;
    }
   
  
    #weatherDetails li {
      margin: 12px 0; /* More space between items */
      color: #e5e5e5;
      line-height: 1.6; /* Add line height for better spacing between text */
    }
   
  
    #weatherDetails li strong {
      font-weight: bold;
      color: #e5e5e5;
    }
   
   
    /* Add some padding and alignment for the whole list */
    #weatherDetails ul {
      padding-left: 15px;
    }
   
  
    .details ul li {
      text-align: left; /* Align text to the left */
      padding: 15px; /* Add padding to give a neat look */
      border: 1px solid;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      margin: 10px 0; /* Ensure there is a consistent margin */
      color: #e5e5e5;
      box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
    }
  
  
    .details ul li:hover{
      transform: translateY(-10px);
      transition: transform 0.3s, box-shadow 0.3s;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
    }
  
   
    /* Responsive styling for smaller screens */
    @media (max-width: 768px) {
      .details {
        width: 80%; /* Adjust width on smaller screens */
        padding: 15px;
      }
   
  
      .details-title {
        font-size: 1.6em; /* Adjust title size */
      }
   
  
      #weatherDetails ul li {
        font-size: 1.0em; /* Adjust font size for better readability */
      }
    }
  
  
    .trends{
      background: rgba(0, 0, 0, 0.2);
      border-radius: 12px;
      padding: 40px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
      max-width: 1200px;
      margin: 40px auto;
      animation: fadeIn 3s ease-in-outl;
      text-align: left;
    }
  
  
    .trends h1{
      font-size: 36px;
      margin-bottom: 20px;
      color: #e5e5e5;
      text-align: center;
    }
  
  
  
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  
  
  /* Styling for the container */
  .dropdown-container {
    width: 100%;
    max-width: 500px;
    background-color: #27a162;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    overflow: hidden;
  }
  
  .title {
    font-size: 24px;
    text-align: center;
    color: #ffffff;
    font-family: 'Arial', sans-serif;
    margin-bottom: 10px;
  }
  
  .content {
    font-size: 16px;
    text-align: center;
    color: #ffffff;
    line-height: 1.6;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: all 0.4s ease;
  }
  
  .content.show {
    max-height: 200px;
    opacity: 1;
  }
  
  .dropdown-button {
    display: inline-block;
    background-color: #1f9457;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 20px;
  }
  
  .dropdown-button:hover {
    background-color: #1fb96a;
  }
  
  .dropdown-button:focus {
    outline: none;
  }
  
  
  .container{
    width: 100%;
    min-height: 100vh;
    padding-top: 4%;
    padding-left: 10%;
  }
  
  .container h1{
    display: flex;
    align-items: center;
    font-size: 35px;
    font-weight: 600;
  }
  
  .container h1 img{
    width: 60px;
    margin-right: 10px;
  }
  
  .container button img{
    width: 25px;
    margin-right: 8px;
  }
  
  .container button{
    display: flex;
    align-items: center;
    background: linear-gradient(#1fb96a, #27a162);
    color: #fff;
    font-size: 16px;
    outline: 0;
    border: 0;
    border-radius: 40px;
    padding: 15px 25px;
    margin: 30px 0 20px;
    cursor: pointer;
  }
  
  .input-box{
    position: relative;
    width: 100%;
    max-width: 500px;
    min-height: 150px;
    background: #1fb96a;
    color: #333;
    padding: 20px;
    margin: 20px 0;
    outline: none;
    border-radius: 5px;
  }
  
  .input-box img{
    width: 25px;
    position: absolute;
    bottom: 15px;
    right: 15px;
    cursor: pointer;
  }
  
  
  .Calculator{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .calculator{
    background: rgb(35, 89, 62);
    padding: 20px;
    border-radius: 10px;
  }
  
  .calculator form input{
    border: 0;
    outline: 0;
    width: 60px;
    height: 60px;
    border-radius: 10px;
    box-shadow: -8px -8px 15px #1fb96a, 5px 5px 15px rgba(0, 0, 0, 0.2);
    background: transparent;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    margin: 10px;
  }
  
  form .display{
    display: flex;
    justify-content: flex-end;
    margin: 20px 0;
  }
  
  form .display input{
    text-align: right;
    flex: 1;
    font-size: 45px;
    box-shadow: none;
  }
  
  form input.equal{
    width: 145px;
    color: #2acd73;
  }
  
  form input.yeah{
    color: #2acd73;
  }
</style>
