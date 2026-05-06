// Loader (оставлен без изменений)
(function() {
    const loader = document.getElementById('loader');
    function forceHideLoader() {
        clearTimeout(window.loaderTimeout);
        if (loader) {
            loader.style.transition = 'none';
            loader.style.display = 'none';
        }
    }
    window.loaderTimeout = setTimeout(forceHideLoader, 2500);
    window.addEventListener('load', () => { setTimeout(forceHideLoader, 100); });
    document.addEventListener('DOMContentLoaded', () => { setTimeout(forceHideLoader, 2000); });
})();

// Burger menu (для всех страниц)
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');
if (hamburger && navUl) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navUl.classList.toggle('active');
    });
}

// Плавная прокрутка для якорей (если есть внутренние ссылки)
document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            if (navUl && navUl.classList.contains('active')) {
                hamburger.click();
            }
        }
    });
});

// Typing effect только на главной странице (если есть .typing)
const typingElement = document.querySelector('.typing');
if (typingElement) {
    const text = "Привет, я";
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    }
    setTimeout(typeWriter, 600);
}

// Анимация навыков (если есть секция .skills)
function animateSkills() {
    const skillCards = document.querySelectorAll('.skill-card');
    if (skillCards.length) {
        skillCards.forEach(card => {
            const progress = card.getAttribute('data-skill');
            const skillProgress = card.querySelector('.skill-progress');
            if (skillProgress && progress) {
                skillProgress.style.width = progress + '%';
            }
        });
    }
}
// Запускаем анимацию навыков при загрузке страницы (если они есть)
document.addEventListener('DOMContentLoaded', () => {
    animateSkills();
});

// Параллакс частиц (только на главной)
const particles = document.querySelector('.particles');
if (particles) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        particles.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
}

// Форма обратной связи (общая для всех страниц с id="contactForm")
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
        btn.disabled = true;
        setTimeout(() => {
            alert('✅ Спасибо! Сообщение отправлено!');
            this.reset();
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 2000);
    });
}

// Форма отзывов
const reviewForm = document.getElementById('reviewForm');
if (reviewForm) {
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Спасибо за отзыв! Он будет опубликован после модерации.');
        this.reset();
    });
}

// Кнопка Back to Top (исправленная)
document.addEventListener('DOMContentLoaded', function() {
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 500) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// Активный пункт меню подсвечиваем по текущей странице (можно доработать, но не обязательно)
const currentPath = window.location.pathname.split('/').pop();
document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
        link.classList.add('active');
    } else if (currentPath === '' && href === 'index.html') {
        link.classList.add('active');
    }
});