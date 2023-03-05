export const convertDate = (date: Date) => {
  if (date) {
    let dayStr = '';
    let monthStr = '';
    const day = date.getDate();
    dayStr = day < 10 ? '0' + day : day.toString();
    const month = date.getMonth() + 1;
    monthStr = month < 10 ? '0' + month : month.toString();
    const year = date.getFullYear();
    return `${dayStr}/${monthStr}/${year}`;
  }
  return '';
};

export const getPrevious7DaysDate = () => {
  var date = new Date();
  return new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);
};

export const getPrevious30DaysDate = () => {
  var date = new Date();
  return new Date(date.getTime() - 30 * 24 * 60 * 60 * 1000);
};

export const getPrevious6MonthsDate = () => {
  var date = new Date();
  return new Date(date.getTime() - 6 * 30 * 24 * 60 * 60 * 1000);
};

export const getPrevious365DaysDate = () => {
  var date = new Date();
  return new Date(date.getTime() - 365 * 24 * 60 * 60 * 1000);
};

export const isStringNullOrEmptyOrWhiteSpace = (value: string) => {
  if (value === null || value === undefined) {
    return true;
  }

  if (value.trim() === '') {
    return true;
  }

  return false;
};

export const getNumberFromString = (val: string) => {
  if (val) {
    if (val.length > 1) {
      const valFirst = val.replace('₦', '');
      const formattedAmount = Number(valFirst.replace(/,/g, ''));
      return formattedAmount;
    }
  }
  return 0;
};

export const getFirstTwoNumbers = (val: Number) => {
  let valFirst = '0';
  if (val) {
    if (val.toString().length > 1) {
      if (val.toString().startsWith('-')) {
        valFirst = val.toString().substring(0, 3);
      } else {
        valFirst = val.toString().substring(0, 2);
      }
    }
  }
  return Number.parseInt(valFirst);
};

export const timeSince = (dateStr) => {
  const date = new Date(dateStr);
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + ' years ago';
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ' months ago';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ' days ago';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' hours ago';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' minutes ago';
  }
  return Math.floor(seconds) + ' seconds ago';
};
