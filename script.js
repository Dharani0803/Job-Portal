<script>
    // helper toast notification
    function showMessage(msg) {
        let toast = document.createElement('div');
        toast.className = 'toast-msg';
        toast.innerHTML = `<i class="fas fa-info-circle"></i> ${msg}`;
        document.body.appendChild(toast);
        setTimeout(() => { toast.remove(); }, 2200);
    }

    // interactivity for feature cards + dropdown links
    const allFeatureTriggers = document.querySelectorAll('[data-feature], .feature-card');
    function handleFeatureClick(e) {
        let action = '';
        if(e.currentTarget.getAttribute('data-feature')) {
            action = e.currentTarget.getAttribute('data-feature');
        } else if(e.currentTarget.classList.contains('feature-card')) {
            action = e.currentTarget.getAttribute('data-action');
        }
        if(action) {
            showMessage(`✨ "${action}" — feature coming soon! 🚀`);
        } else {
            showMessage(`Explore more on ElevateJobs!`);
        }
        e.preventDefault();
    }
    document.querySelectorAll('.dropdown-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const feature = link.getAttribute('data-feature');
            if(feature) showMessage(`🔍 ${feature} — we're preparing amazing tools for you.`);
            else showMessage(`Explore this section soon.`);
        });
    });
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('click', () => {
            const action = card.getAttribute('data-action');
            if(action) showMessage(`🌟 ${action} — unlock new possibilities!`);
        });
    });

    document.getElementById('signBtn')?.addEventListener('click', (e) => {
        e.preventDefault();
        showMessage(`🔐 Sign In / Sign Up portal opening soon! Stay tuned.`);
    });
    document.getElementById('homeLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
        showMessage(`🏠 Welcome back to ElevateJobs Home`);
    });
    document.getElementById('quickSearchBtn')?.addEventListener('click', () => {
        const query = document.getElementById('jobSearchInput').value.trim();
        if(query) showMessage(`🔎 Searching "${query}" — thousands of results ready (demo)`);
        else showMessage(`Please enter a job title or keyword`);
    });

    // Mobile menu toggle + responsive dropdowns
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    function handleMobileDropdowns() {
        const isMobile = window.innerWidth <= 880;
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            const dropdown = item.querySelector('.dropdown-menu');
            const link = item.querySelector('.nav-link');
            if(!dropdown) return;
            if(isMobile) {
                link.style.pointerEvents = 'auto';
                const toggleFunc = (e) => {
                    if(e.target.closest('.dropdown-menu')) return;
                    e.preventDefault();
                    const isOpen = dropdown.classList.contains('show-mobile');
                    document.querySelectorAll('.dropdown-menu.show-mobile').forEach(menu => {
                        if(menu !== dropdown) menu.classList.remove('show-mobile');
                    });
                    if(!isOpen) dropdown.classList.add('show-mobile');
                    else dropdown.classList.remove('show-mobile');
                };
                link.removeEventListener('click', link._mobileToggle);
                link._mobileToggle = toggleFunc;
                link.addEventListener('click', link._mobileToggle);
            } else {
                if(link._mobileToggle) link.removeEventListener('click', link._mobileToggle);
                dropdown.classList.remove('show-mobile');
                link.style.pointerEvents = '';
            }
        });
    }
    window.addEventListener('resize', () => { handleMobileDropdowns(); if(window.innerWidth > 880) navMenu.classList.remove('active'); });
    handleMobileDropdowns();
    document.addEventListener('click', (e) => {
        if(window.innerWidth <= 880 && navMenu.classList.contains('active') && !hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
    window.addEventListener('load', () => {
        document.querySelectorAll('.feature-card').forEach((card, idx) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => { card.style.transition = 'all 0.4s ease'; card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, idx * 60);
        });
    });
</script>
