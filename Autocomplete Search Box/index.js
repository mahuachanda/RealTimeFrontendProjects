let availableKeywords = [
  "HTML",
  "Javascript",
  "CSS",
  "Web development",
  "How to learn Web design",
  "How to create website",
  "How to succeed in an interview",
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;
  if (input.length > 0) {
    result = availableKeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  }
  display(result);
};

function display(result) {
  const content = result.map((item) => {
    return `<li onclick="selected(this)">${item}</li>`;
  });

  resultBox.innerHTML = `<ul>${content.join("")}</ul>`;
}

function selected(item) {
  inputBox.value = item.innerHTML;
  resultBox.innerHTML = "";
}
