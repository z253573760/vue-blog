export const fmtDate = function(obj) {
  const date = new Date(obj);
  const y = 1900 + date.getYear();
  const m = "0" + (date.getMonth() + 1);
  const d = "0" + date.getDate();
  return (
    y +
    "-" +
    m.substring(m.length - 2, m.length) +
    "-" +
    d.substring(d.length - 2, d.length)
  );
};
