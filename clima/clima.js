const axios = require("axios");

const getClima = async(lat, lng) => {
    const resp = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=845b98b3c4ad884a2376d28daab55faf&units=metric`
    );
    return resp.data.main.temp;
};

module.exports = {
    getClima
};