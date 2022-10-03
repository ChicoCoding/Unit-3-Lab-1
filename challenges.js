const wage = 10;
const hours = 50;
let weeks = 0;
let pay = 0;
let weekPay = 0;
let preovertimePay = 40 * wage;
let overtimeWage = wage * 1.5;
let overtimeHours = hours - 40;
while (pay < 1000000) {
  if (hours <= 40) {
    weekPay = wage * hours;
    pay = pay + weekPay;
    weeks++;
  } else {
    weekPay = preovertimePay + overtimeHours * overtimeWage;
    pay = pay + weekPay;
    weeks++;
  }
  console.log(`Week: ${weeks} Total Pay:${pay}`);
}

console.log(`It took ${weeks} weeks to earn $${pay} at $${weekPay} per week.`);
