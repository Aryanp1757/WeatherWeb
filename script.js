const timeE1 =document.getElementById('time');
const dateE1 =document.getElementById('date');
const currentweatheritem1 =document.getElementById('current-weather-item');
const timezone =document.getElementById('time-zone');
const countryE1 =document.getElementById('country');
const weatherforecastE1 =document.getElementById('weather-forecast');
const currenttempE1 =document.getElementById('current-temp');


const day =['Sunday','Monady','Tuesday','Wednesday','Thursday','Friday','Saturday']
const month =['Jan','feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

setInterval(()=>{
    const time  = new Date();
    const month  = time.getMonth();
    const date  = time.gateDate();
    const day  = time.gateDay();
    const hour  = time.gateHours();
    const hoursIn12Hrformat  = hour >=13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm  = hour >=12 ? 'PM' : 'AM'

    timeE1.innerHTML = hoursIn12Hrformat + ':' + minutes+ ' ' + `<span id="am-pm">${ampm}</span>`

    dateE1.innerHTML = days[day] + ' , ' + date+ ' ' + month[month]
}, 1000);

