var axios = require('axios');

const  URL  = `http://api.openweathermap.org/data/2.5/weather?appid=0c7ea69ad4434f6f4725557f0fb6c2c0&units=metric`;

// KEY = 0c7ea69ad4434f6f4725557f0fb6c2c0

module.exports =  {
    getTemp:function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${URL}&q=${encodedLocation}`;

       return axios.get(requestUrl).then(function (res) {
            if(res.data.code && res.data.message){
                throw new Error(res.data.message);
            }else {
                return res.data.main.temp;
            }
        },function (res) {
            throw new Error(res.data.message);
        });
    }
};