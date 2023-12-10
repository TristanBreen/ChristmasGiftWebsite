document.addEventListener('DOMContentLoaded', function () {
    const countdownContainer = document.querySelector('.countdown-container');
    const messageContainer = document.getElementById('countdown-message');
    const titleContainer = document.getElementById('page-title');

    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.play();

    function updateCountdown() {
        const now = new Date();
        const targetDate = new Date('December 22, 2023 18:00:00');
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) 
        {
            countdownContainer.style.display = 'none';
            titleContainer.remove();
            messageContainer.style.display = 'block';
            return;
        }

        const days = padZero(Math.floor(timeDifference / (1000 * 60 * 60 * 24)));
        const hours = padZero(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const minutes = padZero(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)));
        const seconds = padZero(Math.floor((timeDifference % (1000 * 60)) / 1000));

        document.getElementById('days').innerText = days + " :";
        document.getElementById('hours').innerText = hours + " :";
        document.getElementById('minutes').innerText = minutes + " :";
        document.getElementById('seconds').innerText = seconds;
    }

    function padZero(num) 
    {
        return num < 10 ? '0' + num : num;
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
