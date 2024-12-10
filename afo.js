const buyButtons = document.querySelectorAll('.product .btn');

buyButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target.closest('.product');
        const productName = product.querySelector('h3').innerText;
        const productPrice = product.querySelector('p').innerText.replace('Цена: ', '');
        addToCart(productName, productPrice);
    });
});

// Функция для добавления товара в корзину
let cart = [];

function addToCart(name, price) {
    // Добавляем товар в массив корзины
    cart.push({ name, price });
    // Показываем сообщение об успешном добавлении
    alert(`${name} добавлен в корзину!`);
    // Обновляем отображение корзины (если требуется)
    updateCartDisplay();
}

// Функция для отображения содержимого корзины (дополнительно)
function updateCartDisplay() {
    const cartElement = document.querySelector('.cart-items');
    if (cartElement) {
        cartElement.innerHTML = '';
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerText = `${item.name} - ${item.price}`;
            cartElement.appendChild(itemElement);
        });
    }
}

// Добавляем выпадающее меню для мобильных устройств
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// Реализация простого слайдера для главного баннера
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.hero-slide');
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 5000); // Меняем слайд каждые 5 секунд
}
// Получаем все ссылки с атрибутом href, начинающимся с #
const links = document.querySelectorAll('a[href^="#"]');

// Для каждой ссылки добавляем обработчик события клика
links.forEach(link => {
  link.addEventListener('click', event => {
    // Получаем элемент, на который ссылается ссылка
    const target = document.querySelector(link.getAttribute('href'));

    // Если элемент существует, прокручиваем страницу до него
    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});