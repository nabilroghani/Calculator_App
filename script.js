const input = document.querySelector("input");
const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const action = e.target.closest("button").name; // button ka name

    if (action === "clear-all") {
      input.value = "";
    } else if (action === "clear") {
      input.value = input.value.slice(0, -1);
    } else if (action === "equal") {
      try {
        let exp = input.value;

        // % ka handling (ex: 50% → 0.5, 200*50% → 100)
        exp = exp.replace(/(\d+)%/g, "($1/100)");

        input.value = eval(exp);
      } catch {
        input.value = "Error";
      }
    } else {
      input.value += action;
    }
  });
});
