document.addEventListener('DOMContentLoaded', function() {
    // Navbar HTML
    const navbarHTML = `
        <nav class="navbar">
            <a href="index.html" class="navbar-brand">
                <img src="assets/logo.png" alt="Kumulo" style="height: 44px; width: auto; margin-right: 8px;">
                <span class="brand-text">Kumulo</span>
            </a>
            <div class="navbar-toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <div class="navbar-links" id="navbar-links">
                <a href="offres.html">SERVEUR MINECRAFT</a>
                <a href="a-propos.html">À PROPOS</a>
                <a href="partenariats.html">PARTENARIATS</a>
                <a href="https://billing.kumulo.fr" class="nav-button">COMMENCER</a>
            </div>
        </nav>
    `;

    // Footer HTML
    const footerHTML = `
        <footer>
            <div class="footer-content">
                <div class="footer-logo">
                    <img src="assets/logo.png" alt="Kumulo" style="height: 44px; width: auto; margin-right: 8px;">
                    <span class="brand-text">Kumulo</span>
                </div>
                <div class="footer-links">
                    <div class="footer-column">
                        <h3>Produits</h3>
                        <a href="offres.html">Minecraft</a>
                    </div>
                    <div class="footer-column">
                        <h3>Entreprise</h3>
                        <a href="a-propos.html">À propos</a>
                        <a href="legal.html">Mentions légales</a>
                        <a href="confidentialite.html">Politique de confidentialité</a>
                        <a href="partenariats.html">Partenariats</a>
                    </div>
                    <div class="footer-column">
                        <h3>Support</h3>
                        <a href="https://discord.gg/s9mxpgkmgZ">Rejoindre le Discord</a>
                        <a href="https://status.kumulo.fr" target="_blank">Statut des serveurs</a>
                        <a href="https://ptero.kumulo.fr">Accès au panel</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Kumulo. Tous droits réservés.</p>
            </div>
        </footer>
    `;

    // Insert navbar at the start of body
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    // Insert footer at the end of body
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // Mobile menu functionality
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarLinks = document.getElementById('navbar-links');
    
    if(mobileMenu && navbarLinks) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('is-active');
            navbarLinks.classList.toggle('active');
        });
    }

    // Toast notification system
    function showToast(message) {
        // Create toast element
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <div class="toast-content">
                <i class="fas fa-info-circle toast-icon"></i>
                <span class="toast-message">${message}</span>
                <button class="toast-close" onclick="this.parentElement.parentElement.remove()">&times;</button>
            </div>
        `;
        
        // Add to body
        document.body.appendChild(toast);
        
        // Show toast
        setTimeout(() => toast.classList.add('show'), 100);
        
        // Auto remove after 4 seconds
        setTimeout(() => {
            if (toast.parentElement) {
                toast.remove();
            }
        }, 4000);
    }

    // Make showToast globally available
    window.showToast = showToast;

    // Add click handlers for development features
    document.querySelectorAll('[data-toast]').forEach(element => {
        element.addEventListener('click', function(e) {
            if (!element.hasAttribute('target')) {
                e.preventDefault();
            }
            const message = this.getAttribute('data-toast');
            showToast(message);
        });
    });
});