import moment from 'moment';

export const labelSevenDaysAgo = () => {
  const today = moment();
  const labels = [];
  for (let i = 1; i <= 7; i++) {
    labels.push(today.clone().subtract(i, 'days').format('dddd').substring(0, 3));
  }
  return labels;
};
