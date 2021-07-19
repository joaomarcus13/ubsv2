import moment from 'moment';

export function convertDate(timestamp) {
  const newDate = new Date(timestamp);
  return moment.utc(newDate).format('DD/MM/YYYY');
}

export function getAge(date) {
  // return moment().diff(date, 'years', false);
  const now = moment(Date.now());
  const birthDate = moment(date);

  const years = now.diff(birthDate, 'year');
  birthDate.add(years, 'years');

  const months = now.diff(birthDate, 'months');
  birthDate.add(months, 'months');

  return `${years} anos e ${months} meses`;
}
