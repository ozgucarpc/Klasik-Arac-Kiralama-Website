import Img2 from "../images/testimonials/pfp1.jpg";
import Img3 from "../images/testimonials/pfp2.jpg";

function Testimonials() {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>İnsanlar tarafından incelendi</h4>
              <h2>Müşteri Görüşleri</h2>
              <p>
                Müşterilerimiz üzerinde yarattığımız olumlu etkiyi keşfedin, Müşterilerimizin deneyimlediği hizmetimiz ve sonuçlarımızı paylaşmak için can atıyorlar.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "Bu web sitesinde bir araba kiraladık mükemmel bir deneyimdi bizim için, aynı aracı Naboo'da bulamıyoruz. Tahminen bu site için Luke Skywalkerla savaşmam gerekiyor."
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img2} alt="user_img" />
                    <span>
                      <h4>Darth Vader</h4>
                      <p>Naboo</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "Dünyaya yaptığımız gezi sırasında bu siteden Araç kiraladık. Harika durumdaydı ve gezimizi daha da iyi hale getirdi. Bunu Anakinle paylaşmam gerekicek."
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img3} alt="user_img" />
                    <span>
                      <h4>Yoda</h4>
                      <p>Alderaan</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
