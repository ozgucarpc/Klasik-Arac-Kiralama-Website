import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Seyahatinizi şimdi planlayın</h3>
              <h2>Hızlı ve kolay araç kiralama</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>Araba Seç</h3>
                <p>
                İhtiyaçlarınızı karşılamak için mükemmel bir araca sahibiz
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Müşteri Hizmetleri</h3>
                <p>
                Bilgili ve güler yüzlü müşteri hizmetlerimiz her zaman yardıma hazırdır, herhangi bir sorunuz veya endişeniz için arayın.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>Hadi sürelim</h3>
                <p>
                  Şimdi yolları keşfetme zamanı
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
