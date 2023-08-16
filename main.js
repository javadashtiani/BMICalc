
      // ++++++++++++++++++++++++++++++++++++++++++++++++++++ VARIABLE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      const heightInp = document.querySelector(".height");
      const weightInp = document.querySelector(".weight");
      const calcBtn = document.getElementById("calc");
      const alert = document.querySelector(".alert");
      const bmiBoxValue = document.querySelector(".bmi-box-value");
      const resetBtn = document.querySelector(".reset-btn");
      const showHeightValue = document.querySelector(".show-height-value");
      const showWeightValue = document.querySelector(".show-weight-value");
      const bmiValue = document.querySelector(".bmi-value");
      const showStatus = document.querySelector(".status");
      // ++++++++++++++++++++++++++++++++++++++++++++++++++++ SET EVENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      calcBtn.addEventListener("click", () => {
        calc();
      });
      resetBtn.addEventListener("click", () => {
        bmiBoxValue.classList.remove("show-box");
        heightInp.value = "";
        weightInp.value = "";
        heightInp.focus()
      });
      // ++++++++++++++++++++++++++++++++++++++++++++++++++++++ FUNCTION CALC BMI +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      function calc() {
        if (heightInp.value === "" || weightInp.value === "") {
          setTimeout(() => {
            alert.style.display = "block";
          }, 200);
          setTimeout(() => {
            alert.style.display = "none";
          }, 1500);
        } else {
          bmiBoxValue.classList.add("show-box");
          bmiFormula = Math.floor(
            weightInp.value / (heightInp.value / 100) ** 2
          );
          bmiValue.innerHTML = bmiFormula;
          if (bmiFormula < 18.5) {
            showHeightValue.innerHTML = heightInp.value + " " + "Cm";
            showWeightValue.innerHTML = weightInp.value + " " + "Kg";
            showStatus.innerHTML = " underWeight";
            showStatus.style.color = "orange";
          } else if (bmiFormula > 18.5 && bmiFormula <= 24.9) {
            showHeightValue.innerHTML = heightInp.value + " " + "Cm";
            showWeightValue.innerHTML = weightInp.value + " " + "Kg";
            showStatus.innerHTML = " normalWeight ";
            showStatus.style.color = "green";
          } else if (bmiFormula >= 25 && bmiFormula <= 29.9) {
            showHeightValue.innerHTML = heightInp.value + " " + "Cm";
            showWeightValue.innerHTML = weightInp.value + " " + "Kg";
            showStatus.innerHTML = " overWeight";
            showStatus.style.color = "red";
          } else {
            showHeightValue.innerHTML = heightInp.value + " " + "Cm";
            showWeightValue.innerHTML = weightInp.value + " " + "Kg";
            showStatus.innerHTML = "You are too fat!!!";
            showStatus.style.color = "darkred";
          }
        }
      }
      // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ END FUNCTION ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
