const request = require('postman-request')

const forecast = (lat, long, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=f1f378f68f40a6b2b2c9ffbb028ec6e5&query='+lat+ ','+ long+ '&units=m'


    request ({ url, json: true}, (error, response) => {
        if (error) {
            callback('Unale to connect to location services', undefined)
        } else if(response.body.success === false){
            callback({
                Info: response.body.error.info}, 
                undefined)

        } else {
            callback ( undefined, {
                City: response.body.location.name,
                Country: response.body.location.country,
                WeatherDescription: response.body.current.weather_descriptions[0],
                Temp: response.body.current.temperature,
                Feelslike: response.body.current.feelslike
            })
        }


    })

}

module.exports = forecast
