const emailInput = document.getElementById('femail');
emailInput.addEventListener('input', (e) => {
  const email = e.target.value;
  if (!/^\[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    alert('Invalid email format');
  }
});

const contactInput = document.getElementById('fcontact');
contactInput.addEventListener('input', (e) => {
  const contact = e.target.value;
  if (isNaN(contact) || contact.length !== 10) {
    alert('Invalid contact number');
  }
});
