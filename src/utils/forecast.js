const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/7cd0f26f2ff54d180e1b6311d4aed489/'+ lat + ',' + long +''
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('unable to connect to weather services', undefined)
        } else if (body.error) {
            callback('unable to find location. please try again.', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' The current temp is ' + body.currently.temperature + '. there is a ' + body.currently.precipProbability + '% chance of rain.' + ' Low tempreture of ' + body.daily.data[0].temperatureMin + ', and a high of ' + body.daily.data[0].temperatureMax)
        }
    })
}

module.exports = forecast