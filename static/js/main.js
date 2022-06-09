const START_DATE = '2017-11-14'
const BIRTH_DAY = '2022-11-14';

const now = new Date();
const startDate = new Date(START_DATE);
const birthday = new Date(BIRTH_DAY);

const ms = startDate.getTime() + 2000 * (1000 * 60 * 60 * 24);
const thousand = new Date(ms);

const thousandDate = thousand.getFullYear() + '.' + (thousand.getMonth()+1) + '.' + thousand.getDate();
document.getElementById('thousand-date').innerHTML = thousandDate

function anniversaryDate(endDay, startDay, anniversary) {
  const timeDiff = endDay.getTime() - startDay.getTime();
  //ms는 1000에 1초 60초 * 60분 * 24시간 + (기념일은 당일이 1일이기 때문에 + 1)
  const day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
  document.getElementById(anniversary).innerHTML = (`${day} ${anniversary === 'love' ? '일째' : '일 남음'}`)  
}

anniversaryDate(now, startDate, 'love');
anniversaryDate(birthday, now, 'birthday');
anniversaryDate(thousand, now, 'thousand');