function add(numbers) {
   const arr = numbers.split(',');
   let sum = 0;
   arr.forEach((val) => {
       sum = sum + Number(val);
   });
   return sum;
}

module.exports = { add };