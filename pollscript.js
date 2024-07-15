const yayButton = document.getElementById('yayButton');
const nayButton = document.getElementById('nayButton');
const resultElement = document.getElementById('result');

let yayCount = 0;
let nayCount = 0;

yayButton.addEventListener('click', () => {
  yayCount++;
  updateResult();
});

nayButton.addEventListener('click', () => {
  nayCount++;
  updateResult();
});

function updateResult() {
  const resultText = `Yay: ${yayCount}, Nay: ${nayCount}`;
  resultElement.textContent = resultText;
}