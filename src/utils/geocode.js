const request = require('postman-request')

// const city = 'Berlin'

const geocode =(city, callback) => {
    
    const url = 'http://api.weatherstack.com/current?access_key=f1f378f68f40a6b2b2c9ffbb028ec6e5&query=' + encodeURIComponent(city) +'&units=m'

    request ({ url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if(response.body.success=== false){
            const errorinfo = response.body.error.info
            callback(errorinfo, undefined)

        } else {
            callback (undefined, {
                lat: response.body.location.lat,
                long: response.body.location.lon,
                location: response.body.country
            })
           
        }


    })

}

// console.log (geocode)

module.exports = geocode