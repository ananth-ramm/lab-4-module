const { DateTime, Interval } = luxon;

const birthDate = DateTime.fromISO("2002-12-15");
const now = DateTime.now();
const diffInDays = Math.floor(now.diff(birthDate, "days").days);

const diffObj = now.diff(birthDate, ["years", "months", "days"]).toObject();
const years = Math.floor(diffObj.years);
const months = Math.floor(diffObj.months);
const days = Math.floor(diffObj.days);

const date1 = DateTime.fromISO("2025-11-09");
const date2 = DateTime.fromISO("2025-11-13");
const diff1 = Math.abs(now.diff(date1, "days").days);
const diff2 = Math.abs(now.diff(date2, "days").days);
const closestDate = diff1 < diff2 ? date1 : date2;

const comparison = date1 < date2 ? "before" : "after";

const londonTime = now.setZone("Europe/London").toFormat("yyyy-MM-dd HH:mm:ss");

document.getElementById("output").innerHTML = `
  <p> 1) Days since birth: ${diffInDays} days</p>
  <p> 2) Age: ${years} years, ${months} months, ${days} days</p>
  <p> 3) Date closest to today: ${closestDate.toISODate()}</p>
  <p> 4) The first date (${date1.toISODate()}) is before the second date (${date2.toISODate()}).</p>
  <p> 5) Current time in London: ${londonTime}</p>
`;
