const monthEl = document.querySelector('.month');
const weekday = document.querySelector('.weekday');
const day = document.querySelector('.day');
const year = document.querySelector('.year');

const date = new Date();
const currentMonth = date.getMonth();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  monthEl.innerText = months[currentMonth];

  weekday.innerText = date.toLocaleString("en", {
    weekday: "long"
  });

  day.innerText = date.getDay();

  year.innerText = date.getFullYear();
