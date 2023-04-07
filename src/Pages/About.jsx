import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import AboutMain from "../images/about/about-main.jpg";

function About() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="Hakkımızda" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
            />
            <div className="about-main__text">
              <h3>Hakkımızda</h3>
              <h2>Motoru çalıştırıyorsunuz ve maceranız başlıyor</h2>
              <p>
                Merhaba ben Özgüç, Frontend alanında kendimi geliştirmeye
                çalışıyorum. Yapyığım projeleri github üzerinden paylaşmaktayım.
                İyi dileklerinizi iletin.
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box"></div>
              </div>
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>
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
    </>
  );
}

export default About;
