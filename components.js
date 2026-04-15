/*  components.js
    Injects the shared <nav> and <footer> on every page.
    Usage: call loadComponents('PageName') at the bottom of each page.
    Valid page names: 'Home', 'About', 'Blog', 'Therapies', 'Contact', 'Donate'
*/

function loadComponents(activePage) {

    const isSubpage = window.location.pathname.includes('/Blogs/');
    const root = isSubpage ? '../' : './';

    const navHTML = `
    <nav id="main-nav">
      <div class="logo">
        <a href="${root}Index.html">
          <img src="${root}Images/Logos/Blue.png" alt="CPFC Logo">
          <span class="site-name">Cerebral Palsy<br>Foundation Centre</span>
        </a>
      </div>
      <div class="nav-links" id="nav-links">
        <a href="${root}Index.html"      ${activePage==='Home'      ? 'class="active"' : ''}>Home</a>
        <a href="${root}About_us.html"   ${activePage==='About'     ? 'class="active"' : ''}>About Us</a>
        <a href="${root}Our_therapies.html" ${activePage==='Therapies' ? 'class="active"' : ''}>Our Therapies</a>
        <a href="${root}Blog.html"       ${activePage==='Blog'      ? 'class="active"' : ''}>Blog</a>
        <a href="${root}Contact_us.html" ${activePage==='Contact'   ? 'class="active"' : ''}>Contact Us</a>
        <a href="${root}Donate.html" class="nav-donate">Donate</a>
      </div>
      <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>`;

    const footerHTML = `
    <footer>
      <div class="footer-content">
        <section>
          <h2>Contact Us</h2>
          <address>
            <h3>Phone</h3>
            <a href="tel:+254735786495">+254 735 786 495</a><br>
            <a href="tel:+254790505801">+254 790 505 801</a>
            <h3>Email</h3>
            <a href="mailto:Cerebralpalsycentre@gmail.com">Cerebralpalsycentre@gmail.com</a>
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
        <section class="Footer-social-media">
          <h2>Follow Us</h2>
          <ul>
            <li>
              <a href="https://www.instagram.com/cerebralpalsycentre?igsh=cHFtaXJkdnJ1emFz" target="_blank" rel="noopener">
                <img src="${root}Images/Logos/Instagram_FT.png" alt="Instagram">Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/p/Cerebral-Palsy-Foundation-Centre-Tudor-100081498852588/" target="_blank" rel="noopener">
                <img src="${root}Images/Logos/Facebook_FT.png" alt="Facebook">Facebook
              </a>
            </li>
            <li>
              <a href="https://wa.link/k3c6dp" target="_blank" rel="noopener">
                <img src="${root}Images/Logos/Whatsapp_FT.png" alt="WhatsApp">WhatsApp
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div class="footer-bottom">
        &copy; 2024 Cerebral Palsy Foundation Centre, Mombasa.
        Developed and managed by Nabeel Chakera &mdash;
        <a href="tel:+254777999221">+254 777 999 221</a> &mdash;
        <a href="mailto:Nabeelchakera@gmail.com">Nabeelchakera@gmail.com</a>
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
