export const countController = (minus, number, plus, input) => {
  let n = +input.value; //приводим строку к числу

  minus.addEventListener("click", () => {
    if (n > 1) {
      n -= 1;
    }

    number.textContent = n;
    input.value = n;
  });

  plus.addEventListener("click", () => {
    n += 1;
    number.textContent = n;
    input.value = n;
  });
};
