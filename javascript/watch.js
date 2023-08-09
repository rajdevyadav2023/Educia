const dateEle = document.getElementById("date");
const timeEle = document.getElementById("time");

// format date javascript
function dateFormater(date, separator) {
    var day = date.getDate();
    // add +1 to month because getMonth() returns month from 0 to 11
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    // show date and month in two digits
    // if month is less than 10, add a 0 before it
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    // now we have day, month and year
    // use the separator to join them
    
    return {nowDate : `${day} ${separator}  ${month} ${separator} ${year}`, nowTime : `${hours} : ${minutes} : ${seconds} ${hours < 13 ? "AM" : "PM"}`}
}

setInterval(() => {
    var now = new Date();
    const result = dateFormater(now, '-');
    dateEle.textContent = result.nowDate;
    timeEle.textContent = result.nowTime;
}, 500);

// const now = new Date();
// let result = dateFormater(now, "-");
// console.log(result)




