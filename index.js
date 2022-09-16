String.prototype.toFixedWithoutRounding = function(value) {
    return value === 0 ? this.toString().split('.')[0] : this.toString().split('.')[1]
}

function countdown(to = '1 Jan 2023') {
    const toDate = new Date(to);
    const fromDate = new Date();

    const seconds = (toDate.getTime() - fromDate.getTime()) / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;

    const daysFinal = days.toString().toFixedWithoutRounding(0);
    const daysRemainder = '0.'+days.toString().toFixedWithoutRounding(1);

    const hoursFinal = Number(daysRemainder * 24).toString().toFixedWithoutRounding(0);
    const hoursRemainder = Number('0.'+hours.toString().toFixedWithoutRounding(1));

    const minutesFinal = Number(hoursRemainder * 60).toString().toFixedWithoutRounding(0);
    const minutesRemainder = Number('0.'+minutes.toString().toFixedWithoutRounding(1));

    const secondsFinal = Number(minutesRemainder * 60).toString().toFixedWithoutRounding(0);

    const title = document.querySelector('#title span');
    const daysEl = document.querySelector('#days span');
    const hoursEl = document.querySelector('#hours span');
    const minutesEl = document.querySelector('#minutes span');
    const secondsEl = document.querySelector('#seconds span');

    title.textContent = to;
    daysEl.textContent = daysFinal;
    hoursEl.textContent = hoursFinal;
    minutesEl.textContent = minutesFinal;
    secondsEl.textContent = secondsFinal;
}

setInterval(countdown, 1000, '16 September 2022 17:00');