let availableKeywords = [
  "HTML",
  "Javascript",
  "CSS",
  "Web development",
  "How to learn Web design",
  "How to create website",
  "How to succeed in an interview",
  "How to learn CSS within a week",
  "Lets crack the frontend interview",
  "Win my heart",
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
  let result = [];
  const input = inputBox.value;
  if (input.length > 0) {
    result = availableKeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
  }
  display(result);

  if (!result.length) {
    resultBox.innerHTML = "";
  }
};

function display(result) {
  const content = result.map((item) => {
    return `<li onclick = "selected(this)">${item}</li>`;
  });
  resultBox.innerHTML = `<ul>${content.join("")}</ul>`; //as map creates a new array-one comma will added to remove that comma in the ui, we need to add join('')
}

function selected(list) {
  inputBox.value = list.innerHTML;
  resultBox.innerHTML = "";
}
