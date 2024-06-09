const dayjs = require("dayjs");

const dateString2Date = (dateString) => {
  const [month, day] = dateString.split('.').map(Number);
  const date = dayjs(`${dayjs().get('year')}-${month}-${day}`);
  return date;
}

const dateString2NextDate = (dateString) => {
  const date = dateString2Date(dateString);
  const nextDate = date.add(1, 'day');
  return nextDate;
}

const getTodayBeginning = () => {
  return dayjs().startOf('date');
}

const getYesterdayBeginning = () => {
  return getTodayBeginning().add(-1, 'day');
}

const getPrevXDay = (x) => {
  let now = dayjs().startOf('date');
  for (let i = 0; i < x; i++) {
    now = now.add(-1, 'day');
  }
  return now;
}

module.exports = {
  dateString2Date,
  dateString2NextDate,
  getTodayBeginning,
  getYesterdayBeginning,
  getPrevXDay
}