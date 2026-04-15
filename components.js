/*  components.js
    Injects the shared nav and footer on every page.
    Call: loadComponents('PageName')
    Valid: 'Home','About','Therapies','Blog','Contact','Donate'
*/
function loadComponents(activePage) {
    const isSubpage = window.location.pathname.includes('/Blogs/');
    const root = isSubpage ? '../' : './';

    const navHTML = `
    <nav id="main-nav">
      <div class="logo">
        <a href="${root}Index.html">
          <img src="${root}Images/Logos/Black.png" alt="CPFC Logo">
          <span class="site-name">Cerebral Palsy<br>Foundation Centre</span>
        </a>
      </div>
      <div class="nav-links" id="nav-links">
        <a href="${root}Index.html"         ${activePage==='Home'      ? 'class="active"' : ''}>Home</a>
        <a href="${root}About_us.html"      ${activePage==='About'     ? 'class="active"' : ''}>About Us</a>
        <a href="${root}Our_therapies.html" ${activePage==='Therapies' ? 'class="active"' : ''}>Our Therapies</a>
        <a href="${root}Blog.html"          ${activePage==='Blog'      ? 'class="active"' : ''}>Blog</a>
        <a href="${root}Contact_us.html"    ${activePage==='Contact'   ? 'class="active"' : ''}>Contact Us</a>
        <a href="${root}Donate.html" class="nav-donate">Donate</a>
      </div>
      <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>`;

    /* WhatsApp message pre-filled to say user is from the website */
    const waMsg   = encodeURIComponent("Hi, I have come from your website and would like to get in touch.");
    const waLink  = `https://wa.me/254735786495?text=${waMsg}`;
    const fbLink  = "https://www.facebook.com/CerebralPalsyFoundationTudorMombasa/";
    const igLink  = "https://www.instagram.com/cerebralpalsycentre?igsh=cHFtaXJkdnJ1emFz";

    const footerHTML = `
    <footer>
      <div class="footer-content">
        <section class="footer-about">
          <div class="footer-logo-wrap">
            <img src="${root}Images/Logos/Black.png" alt="CPFC" class="footer-logo">
            <span class="footer-brand-name">Cerebral Palsy<br>Foundation Centre</span>
          </div>
          <p class="footer-tagline">Supporting children with special needs through education, therapy and community in Mombasa, Kenya.</p>
        </section>

        <section>
          <h2>Contact</h2>
          <address>
            <p><a href="tel:+254735786495">+254 735 786 495</a></p>
            <p><a href="tel:+254790505801">+254 790 505 801</a></p>
            <p><a href="mailto:Cerebralpalsycentre@gmail.com">Cerebralpalsycentre@gmail.com</a></p>
            <p>Tudor, Mombasa, Kenya</p>
          </address>
        </section>

        <section>
          <h2>Quick Links</h2>
          <ul>
            <li><a href="${root}Index.html">Home</a></li>
            <li><a href="${root}About_us.html">About Us</a></li>
            <li><a href="${root}Our_therapies.html">Our Therapies</a></li>
            <li><a href="${root}Blog.html">Blog</a></li>
            <li><a href="${root}Contact_us.html">Contact Us</a></li>
            <li><a href="${root}Donate.html">Donate</a></li>
          </ul>
        </section>

        <section>
          <h2>Follow Us</h2>
          <div class="footer-social">
            <a href="${fbLink}" target="_blank" rel="noopener" class="social-btn social-fb" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
              <span>Facebook</span>
            </a>
            <a href="${igLink}" target="_blank" rel="noopener" class="social-btn social-ig" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              <span>Instagram</span>
            </a>
            <a href="${waLink}" target="_blank" rel="noopener" class="social-btn social-wa" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </section>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2024 Cerebral Palsy Foundation Centre, Mombasa. All rights reserved.</p>
        <p>Developed and managed by Nabeel Chakera &mdash; <a href="mailto:Nabeelchakera@gmail.com">Nabeelchakera@gmail.com</a></p>
      </div>
    </footer>`;

    document.body.insertAdjacentHTML('afterbegin', navHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    document.getElementById('hamburger').addEventListener('click', function () {
        const links = document.getElementById('nav-links');
        const open  = links.classList.toggle('open');
        this.setAttribute('aria-expanded', open);
    });
}
