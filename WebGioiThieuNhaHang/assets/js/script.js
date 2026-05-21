document.addEventListener('DOMContentLoaded', () => {
    
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.padding = '5px 0';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.padding = '0';
            header.style.background = '#fff';
        }
    });

    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuCards = document.querySelectorAll('.menu-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            menuCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    let count = localStorage.getItem('pizzaCartCount') || 0;
    document.getElementById('cart-count').innerText = count;

    window.addToCart = (itemName) => {
        count++;
        document.getElementById('cart-count').innerText = count;
        localStorage.setItem('pizzaCartCount', count);
        alert(`Đã thêm ${itemName} vào đơn hàng của bạn!`);
    };

    const contactForm = document.getElementById('pizzaContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            const formData = {
                username: name,
                userEmail: email,
                time: new Date().toLocaleString()
            };
            localStorage.setItem('lastFeedback', JSON.stringify(formData));

            alert(`Cảm ơn ${name}! Chúng tôi đã nhận được thông tin và sẽ phản hồi qua email ${email}.`);
            contactForm.reset();
        });
    }
});

const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', () => {
    
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.nav-links li a');
    menuItems.forEach(item => {
        if(item.href === currentLocation){
            item.classList.add('active-nav');
        }
    });

    console.log("Trang web đã sẵn sàng!");
});
