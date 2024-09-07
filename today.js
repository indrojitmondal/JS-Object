const today = new Date();
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JS
const year = today.getFullYear();

const gbFormattedDate = `${day}/${month}/${year}`;
console.log(gbFormattedDate);

