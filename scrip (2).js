/* ==================== TOGGLE NAVBAR MOBILE ==================== */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* ==================== SCROLL SECTIONS ACTIVE LINK ==================== */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* ==================== REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK ==================== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* ==================== TYPED JS (ANIMASI TEKS) ==================== */
if (document.querySelector('.multiple-text')) {
    const typed = new Typed('.multiple-text', {
        strings: ['Software Engineer', 'PPLG Student', 'Python Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}

/* ==================== CONTACT FORM HANDLER ==================== */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        alert(`Terima kasih ${name}, pesan Anda telah berhasil dikirim!`);
        contactForm.reset();
    });
}

/* ==================== DOWNLOAD CV FALLBACK ==================== */
const downloadBtn = document.getElementById('download-cv');
if (downloadBtn) {
    downloadBtn.addEventListener('click', function (e) {
        // Jika file belum di-upload di folder, beri pemberitahuan
        fetch('CV_Althaf.pdf', { method: 'HEAD' }).then(res => {
            if (!res.ok) {
                e.preventDefault();
                alert('File CV sedang disiapkan. Silakan hubungi Althaf melalui formulir kontak.');
            }
        }).catch(() => {
            // Abaikan penanganan jika berjalan secara lokal (file://)
        });
    });
}