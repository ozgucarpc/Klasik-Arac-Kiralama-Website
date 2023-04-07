import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Neden Bizi Seçmelisiniz?</h4>
                <h2>Klasik bir araca sahip olun ve yolun tadını çıkarın</h2>
                <p>
                  Benzersiz bir sürüş deneyimi: Klasik araçlar genellikle tarihi
                  veya koleksiyonluk değere sahip olduğu için benzersiz bir
                  sürüş deneyimi sunarlar. Bu araçlarla sürmek, geleneksel
                  modern araçlardan farklı bir his verir ve sürüş keyfi artırır.
                  Klasik araçlarla gezinti yapmak veya farklı yerleri keşfetmek,
                  tatilin keyifli geçmesine yardımcı olabilir.
                </p>
                <a href="#home">
                  Ayrıntılar İçin &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Eşsiz Araçları Kullanın</h4>
                    <p>
                      Birinci sınıf araçlarımızla sürüş deneyiminizi bir sonraki
                      seviyeye taşıyın.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Herşey Dahil Fiyatlandırma</h4>
                    <p>
                      Her şey dahil fiyatlandırma politikamızla ihtiyacınız olan
                      her şeyi uygun ve şeffaf fiyata alın.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Gizli Masraf Yok</h4>
                    <p>Şeffaf ve dürüst fiyatlandırmaya inanıyoruz.</p>
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

export default ChooseUs;
