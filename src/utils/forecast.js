const request = require('request');



const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=523e2d031f04cdf0ff1e50b30d3e838f&query=${lat},${long}&units=f`
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather services!', undefined);
        }
        else if(body.error){
            callback('Unable to find location.', undefined)
        } else{
            callback(undefined, `${body.current.weather_descriptions[0]}, the temperature is ${body.current.temperature} degrees. It feels like ${body.current.feelslike} degrees. 
            The wind is blowing ${body.current.wind_dir} at a speed of ${body.current.wind_speed}`)
        }
    })
}

module.exports = forecast;