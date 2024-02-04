const contdownDays = document.querySelector('.countdown__number-days');
const contdownHours = document.querySelector('.countdown__number-hours');
const contdownMinutes = document.querySelector('.countdown__number-minutes');
const contdownSeconds = document.querySelector('.countdown__number-seconds');

const setCountdown = () => {
    const countDateTime = new Date("December 31, 2024 23:59:59").getTime();
    const currentDateTime = new Date().getTime();
    const timeDifference = countDateTime - currentDateTime;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24
    
    const updateDay = Math.floor(timeDifference / day);
    const updateHour = Math.floor((timeDifference % day) / hour);
    const updateMinute = Math.floor((timeDifference % hour) / minute);
    const updateSecond = Math.floor((timeDifference % minute) / second);

    contdownDays.innerHTML = updateDay;
    contdownHours.innerHTML = updateHour;
    contdownMinutes.innerHTML = updateMinute;
    contdownSeconds.innerHTML = updateSecond;
}

setInterval(setCountdown, 1000);