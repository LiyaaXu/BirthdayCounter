const button = document.getElementById('dateButton');

button.addEventListener('click', function () {
  const startTitle = document.getElementById('startTitle');
  const startParagraph = document.getElementById('startParagraph');
  const birthdayTime = document.getElementById('birtdayTime');
  const inputWindow = document.getElementById('dateInput');
  const countdown = document.getElementById('countdown');
  const daysCountdown = document.getElementById('days');
  let input = document.getElementById('dateInput').value;
  let userDate = new Date(input);
  let birthdayDate = userDate;
  let birthdayMonth = birthdayDate.getMonth() + 1;
  console.log(birthdayMonth);
  let birthdayDay = birthdayDate.getDate();
  let currentTime = new Date();
  let currentYear = currentTime.getFullYear();
  let currentYearBirthday = new Date(
    currentYear + '-' + birthdayMonth + '-' + birthdayDay
  );
  console.log(currentYearBirthday);

  function counterHandler() {
    startTitle.style.display = 'none';
    startParagraph.style.display = 'none';
    inputWindow.style.display = 'none';
    button.style.display = 'none';
    countdown.style.display = 'inline-block';
  }

  if (currentTime < currentYearBirthday) {
    counterHandler();
    const countDays1 = currentYearBirthday - currentTime;
    let seconds = Math.floor(countDays1 / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    daysCountdown.textContent = days;
  } else if (currentTime > currentYearBirthday) {
    counterHandler();
    const addYear = currentYear + 1;
    console.log(addYear);
    let newYearBirthday = new Date(
      addYear + '-' + birthdayMonth + '-' + birthdayDay
    );
    console.log(newYearBirthday);
    console.log(currentTime);
    countDays2 = newYearBirthday - currentTime;
    let seconds = Math.floor(countDays2 / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    daysCountdown.textContent = days;
  }
});
