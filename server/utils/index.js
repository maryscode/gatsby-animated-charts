function getDateAndTime() {
  function pad2(n) { return n < 10 ? '0' + n : n }
  var date = new Date();
  const dateTime = date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2( date.getDate()) + pad2( date.getHours() ) + pad2( date.getMinutes() ) + pad2( date.getSeconds() );      
  return dateTime;
}

module.exports = getDateAndTime;