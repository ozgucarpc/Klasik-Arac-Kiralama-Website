import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="İletişim" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Ek bilgiye mi ihtiyacınız var?</h2>
              <p>
                15 yılın üzerinde deneyimimiz ve birden çok alanda yetenekli çok
                yönlü bir profesyonel ekibimizle hizmete hazırız.
              </p>
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; (123) 456-7869
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                ozgucarpaci@gmail.com
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp; Eskişehir,
                Türkiye
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Ad ve Soyadınız <b>*</b>
                </label>
                <input type="text" placeholder="Örnek: Özgüç Arpacı"></input>

                <label>
                  E-posta <b>*</b>
                </label>
                <input type="email" placeholder="ozgucarpaci@gmail.com"></input>

                <label>
                  İstek ve Şikayet <b>*</b>
                </label>
                <textarea placeholder="Buraya yazınız.."></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Mesaj
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Bizimle iletişime geçerek araç rezervasyonu yapın</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(123) 456-7869</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
