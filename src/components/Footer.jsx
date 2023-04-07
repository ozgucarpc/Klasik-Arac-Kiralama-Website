function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>Araç</span> Kiralama
              </li>
              <li>
              Tüm sürüş ihtiyaçlarınız için geniş bir araç yelpazesi sunuyoruz. İhtiyaçlarınızı karşılamak için mükemmel bir araca sahibiz.
              </li>
              <li>
                <a href="tel:123456789">
                  <i className="fa-solid fa-phone"></i> &nbsp; (123) -456-789
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                ozgucarpaci@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; ozgucarpaci@gmail.com
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Şirketimiz</li>
              <li>
                <a href="#home">İstanbul</a>
              </li>
              <li>
                <a href="#home">Kariyer</a>
              </li>
              <li>
                <a href="#home">İletişim</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">Nasıl Çalışırız</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Çalışma saatleri</li>
              <li>Haftaiçi 7/24</li>
              <li>Cumartesi: 9:00 - 19:00</li>
              <li>Pazar: Kapalı</li>
            </ul>

            <ul className="footer-content__2">
              <li>Abonelik</li>
              <li>
                <p>En son haberler ve güncellemeler için E-posta ile abone olun.</p>
              </li>
              <li>
                <input type="email" placeholder="E-posta Adresinizi Giriniz"></input>
              </li>
              <li>
                <button className="submit-email">Gönder</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
