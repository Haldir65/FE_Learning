// 2017-12-27T12:00:13.664Z

exports.objectDate = (date) => {
  if (date && typeof date === 'string') {
    date = new Date(date);
    let o = {
      'Y': date.getFullYear(),
      'M': date.getMonth() + 1,
      'D': date.getDate()
    };
    return o;
  }
  return date;
};
