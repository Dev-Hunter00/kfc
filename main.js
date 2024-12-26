// Buttonlarni tanlash
const recommendationButton = document.getElementById('recommendationButton');
const comboButton = document.getElementById('comboButton');

// Kartalar konteynerlarini tanlash
const recommendationContainer = document.getElementById('recommendation');
const comboContainer = document.getElementById('combo');

// "Tavsiya etiladi" tugmasi bosilganda
recommendationButton.addEventListener('click', () => {
  recommendationContainer.style.display = 'flex'; // Kartalarni ko'rsatish
  comboContainer.style.display = 'none'; // Combo kartalarni yashirish
});

// "Combo" tugmasi bosilganda
comboButton.addEventListener('click', () => {
  comboContainer.style.display = 'flex'; // Combo kartalarni ko'rsatish
  recommendationContainer.style.display = 'none'; // Tavsiya etiladi kartalarni yashirish
});
