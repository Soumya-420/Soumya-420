// Profile Image Upload/Change
document.addEventListener('DOMContentLoaded', function() {
    const profileImg = document.getElementById('profileImg');
    const editBtn = document.querySelector('.edit-profile-btn');
    
    // Add click event to edit button
    editBtn.addEventListener('click', function() {
        // Create file input
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        
        input.onchange = function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    profileImg.src = event.target.result;
                    
                    // Add animation
                    profileImg.style.animation = 'none';
                    setTimeout(() => {
                        profileImg.style.animation = 'scaleIn 0.5s ease-out';
                    }, 10);
                };
                reader.readAsDataURL(file);
            }
        };
        
        input.click();
    });
    
    // Add smooth scroll for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add ripple effect to buttons
    editBtn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
    
    // Animate stats on hover
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const strong = this.querySelector('strong');
            if (strong) {
                strong.style.transform = 'scale(1.2)';
                strong.style.transition = 'transform 0.3s ease';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const strong = this.querySelector('strong');
            if (strong) {
                strong.style.transform = 'scale(1)';
            }
        });
    });
    
    // Add parallax effect to profile picture
    document.addEventListener('mousemove', function(e) {
        const profilePic = document.querySelector('.profile-picture');
        const rect = profilePic.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) / 50;
        const deltaY = (e.clientY - centerY) / 50;
        
        profilePic.style.transform = `perspective(1000px) rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`;
    });
    
    // Reset parallax when mouse leaves
    document.addEventListener('mouseleave', function() {
        const profilePic = document.querySelector('.profile-picture');
        profilePic.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    });
});
