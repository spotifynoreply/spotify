const Months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec']

const autoDate = document.querySelector('.autoDate');
const newDate = new Date().getDate();
autoDate.textContent = newDate;

const autoMonth = document.querySelector('.autoMonth');
const newMonth = new Date().getMonth();
autoMonth.textContent = Months[newMonth];

const autoYear = document.querySelector('.autoYear');
const newYear = new Date().getFullYear();
autoYear.textContent = newYear;

const autoDate2 = document.querySelector('.autoDate2');
const newDate2 = new Date().getDate();
autoDate2.textContent = newDate;

const autoMonth2 = document.querySelector('.autoMonth2');
const newMonth2 = new Date().getMonth() + 3;
console.log(newMonth2);
autoMonth2.textContent = Months[newMonth2];

const autoYear2 = document.querySelector('.autoYear2');
const newYear2 = new Date().getFullYear();
autoYear2.textContent = newYear;
