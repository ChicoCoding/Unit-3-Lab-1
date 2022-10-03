let wage = 10;
let hours = 20;

if (hours <= 40) {
  let pay = wage * hours;
} else {
  let pay = 40 * wage + (hours - 40) * (wage * 1.5);
}
