const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = "https://api.darksky.net/forecast/a83136801a47dedb3771801008039bdf/" + latitude + "," + longitude + "?units=si&lang=en"

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain. You can expect a windspeed of ' + response.body.daily.data[0].windSpeed + " m/s.")
        }
    })
}

module.exports = forecast