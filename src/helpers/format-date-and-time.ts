/* Helpers */
import formatText from './format-text';

const amPeriod: string = 'am';
const pmPeriod: string = 'pm';
const twelveHours: number = 12;

const daysOfTheWeek: { [day: number]: string } = {
  1: 'sunday',
  2: 'monday',
  3: 'tuesday',
  4: 'wednesday',
  5: 'thursday',
  6: 'friday',
  7: 'saturday'
};

const monthsOfTheYear: { [month: number]: string } = {
  1: 'january',
  2: 'february',
  3: 'march',
  4: 'april',
  5: 'may',
  6: 'june',
  7: 'july',
  8: 'august',
  9: 'september',
  10: 'october',
  11: 'november',
  12: 'december'
};

function formatPadStart(unit: number): string {
  return unit.toString().padStart(2, '0');
}

function formatDayOfTheWeek(date: Date): string {
  return formatText.formatTitleCase(daysOfTheWeek[date.getDay() + 1]);
}

function formatMonth(date: Date): string {
  const month: string = monthsOfTheYear[date.getMonth() + 1];
  return formatText.formatTitleCase(month);
}

function formatTwentyFourHourTime(date: Date): string {
  const hoursTwentyFourHourClock: number = date.getHours();
  const minutes: string = formatPadStart(date.getMinutes());
  const seconds: string = formatPadStart(date.getSeconds());
  const twentyFourHourTime: string = `${hoursTwentyFourHourClock}:${minutes}:${seconds}`;
  return twentyFourHourTime;
}

function formatTwelveHourTime(twentyFourHourTime: string): string {
  const hoursTwentyFourHourClock: number = +twentyFourHourTime.substring(0, twentyFourHourTime.indexOf(':'));
  const minutesAndSeconds: string = twentyFourHourTime.slice(-6);
  const hoursTwelveHourClock: number
    = (hoursTwentyFourHourClock > twelveHours) || (hoursTwentyFourHourClock === 0)
    ? Math.abs(hoursTwentyFourHourClock - twelveHours)
    : hoursTwentyFourHourClock;
  const isAm: boolean = hoursTwentyFourHourClock < twelveHours;
  const timePeriod: string = isAm ? amPeriod : pmPeriod;
  return `${hoursTwelveHourClock}${minutesAndSeconds} ${timePeriod}`;
}

function formatDayMonthAndDate(date: Date): string {
  const dayOfTheWeek: string = formatDayOfTheWeek(date);
  const month: string = formatMonth(date);
  const dateNumber: number = date.getDate();
  return `${dayOfTheWeek} ${month} ${dateNumber}`;
}

function formatFullDateAndTime(date: Date): string {
  const dayMonthAndDate: string = formatDayMonthAndDate(date);
  const year: number = date.getFullYear();
  const twentyFourHourTime: string = formatTwentyFourHourTime(date);
  const twelveHourTime: string = formatTwelveHourTime(twentyFourHourTime);
  return `${dayMonthAndDate}, ${year} at ${twelveHourTime}`;
}

const formatDateAndTime = {
  formatFullDateAndTime
};

export default formatDateAndTime;
