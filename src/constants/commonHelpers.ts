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
  if (seconds < 1 && seconds > 0) {
    return Math.floor(seconds) + ' seconds ago';
  }

  // if the time is in the future
  if (seconds === 0) {
    return 'Just now';
  }

  if (seconds < -1) {
    return date.toDateString();
  }
};

export const isValidEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const isEqual = (a, b) => {
  // Create arrays of property names
  const aProps = Object.getOwnPropertyNames(a);
  const bProps = Object.getOwnPropertyNames(b);

  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length !== bProps.length) {
    return false;
  }

  for (let i = 0; i < aProps.length; i++) {
    const propName = aProps[i];

    // If values of same property are not equal,
    // objects are not equivalent
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  // If we made it this far, objects
  // are considered equivalent
  return true;
};

export const getAppName = () => {
  return 'Invoice';
};

export const notificationTimes = [
  '08:00:00', // 8:00 AM
  '09:00:00', // 9:00 AM
  '11:00:00', // 11:00 AM
  '12:00:00', // 12:00 PM
  '13:00:00', // 1:00 PM
  '14:00:00', // 2:00 PM
  '15:00:00', // 3:00 PM
  '16:00:00', // 4:00 PM
  '17:00:00', // 5:00 PM
  '18:00:00', // 6:00 PM
  '19:00:00', // 7:00 PM
  '20:00:00', // 8:00 PM
  '21:00:00', // 9:00 PM
];
