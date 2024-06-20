
const inputEl = document.querySelector("#units");
const convertBtn = document.querySelector(".cvrtBtn");
const fields = document.querySelectorAll(".field-data");

let fieldsData = [
  "20 meters = 65.616 feet",
  "20 liters = 5.284 gallons",
  "20 kilos = 44.092 pounds",
];

function converterFunc() {
  const userValue = inputEl.value;
  const meters = (userValue * 3.281).toFixed(3);
  const liters = (userValue * 0.264).toFixed(3);
  const kilograms = (userValue * 2.204).toFixed(3);

  return [
    {
      unit: "meters",
      value: meters,
      conversion: "feet",
    },
    {
      unit: "liters",
      value: liters,
      conversion: "gallons",
    },
    {
      unit: "kilos",
      value: kilograms,
      conversion: "pounds",
    },
  ];
}
function updatingFieldsData() {
  const unitsArr = converterFunc();

  for (let i = 0; i < fieldsData.length; i++) {
    let unitVal = unitsArr[i];
    let resStr = `${inputEl.value} ${unitVal.unit} = ${unitVal.value} ${unitVal.conversion}`;
    fieldsData[i] = resStr;
  }
  render();
}
function render() {
  fields.forEach((field, index) => {
    field.textContent = fieldsData[index];
  });
}
convertBtn.addEventListener("click", updatingFieldsData);
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
