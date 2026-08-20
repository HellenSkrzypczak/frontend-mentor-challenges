document.addEventListener("DOMContentLoaded", function (event) {
  const bntSearch = document.getElementById('bntSearch');
  bntSearch.addEventListener('click', () => {
    const IP = document.getElementById('IPAdress').value;

    if (IP === "" || IP === null || IP === undefined) {
      alert("Por favor, insira um endereço IP válido.");
    } else {
      searchIPLocation(IP);
    }
  });

  async function searchIPLocation(IP) {
    try {
      const apiKey = CONFIG.API_KEY;
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${IP}`
      );

      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      showData(data);
      showMap(data.location.lat, data.location.lng);
    } catch (error) {
      console.error("Erro ao buscar IP:", error);
      alert("Não foi possível encontrar esse endereço. Tente novamente.");
    }
  }

  function showData(data) {
    const outputLocation = document.getElementById('resultLocation');
    const outputTimezone = document.getElementById('resultTimezone');
    const outputISP = document.getElementById('resultISP');
    const outputIP = document.getElementById('resultIP');

    const city = data.location.city || "N/A";
    const country = data.location.country || "N/A";
    const timezone = data.location.timezone || "N/A";

    outputLocation.textContent = `${city}, ${country}`;
    outputTimezone.textContent = `UTC ${timezone}`;
    outputISP.textContent = data.isp;
    outputIP.textContent = data.ip;
  }

  function showMap(lat, lng) {
    document.getElementById('map').innerHTML = "";
    const map = L.map('map').setView([lat, lng], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);
    L.marker([lat, lng]).addTo(map);
  }
});