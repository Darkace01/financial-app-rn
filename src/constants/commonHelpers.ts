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
