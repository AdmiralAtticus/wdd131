
const cardNumberInput = document.getElementById('card-number');
cardNumberInput.addEventListener('input', function () {

  let digits = this.value.replace(/\D/g, '');

  let formatted = digits.match(/.{1,4}/g);  
  this.value = formatted ? formatted.join(' ') : '';
});

const expMonth = document.getElementById('exp-month');
expMonth.addEventListener('input', function () {
  this.value = this.value.replace(/\D/g, '');   
});

const expYear = document.getElementById('exp-year');
expYear.addEventListener('input', function () {
  this.value = this.value.replace(/\D/g, '');
});

const cvvInput = document.getElementById('cvv');
cvvInput.addEventListener('input', function () {
  this.value = this.value.replace(/\D/g, '');
});

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function () {
  const number = cardNumberInput.value.trim();
  const holder = document.getElementById('card-holder').value.trim();
  const month  = expMonth.value.trim();
  const year   = expYear.value.trim();
  const cvv    = cvvInput.value.trim();

  if (!number || !holder || !month || !year || !cvv) {
    alert('Please fill in all fields before submitting.');
    return;
  }

  alert('Payment submitted! Thank you, ' + holder + '.');
});

// Used AI to shed light on a few different concepts for my JS such as the .match function and other auto-format helpers //