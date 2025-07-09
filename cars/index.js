 // Filter cars by category
 document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        const category = this.getAttribute('data-filter');
        
        // Filter cars
        document.querySelectorAll('.car-card').forEach(car => {
            if(category === 'all' || car.getAttribute('data-category') === category) {
                car.style.display = 'block';
            } else {
                car.style.display = 'none';
            }
        });
    });
});

// Initialize all cars as visible
document.querySelectorAll('.car-card').forEach(car => {
    car.style.display = 'block';
});
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="ri-close-line"></i>' 
            : '<i class="ri-menu-line"></i>';
    });
    
    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="ri-menu-line"></i>';
            }
        });
    });
    
    // Change active link on click
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelectorAll('.nav-links li a').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar') && window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="ri-menu-line"></i>';
        }
    });
});

