import { useState } from "react";

function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);
  return (
    <>
      {data[carID].map((car, id) => (
        <div key={id} className="box-cars">
          {/* araba */}
          <div className="pick-car">
            {carLoad && <span className="loader"></span>}
            <img
              style={{ display: carLoad ? "none" : "block" }}
              src={car.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </div>
          {/* açıklama */}
          <div className="pick-description">
            <div className="pick-description__price">
              <span>₺{car.price}</span>/ Günlük kira
            </div>
            <div className="pick-description__table">
              <div className="pick-description__table__col">
                <span>Model</span>
                <span>{car.model}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Marka</span>
                <span>{car.mark}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Yıl</span>
                <span>{car.year}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Kapı Sayısı</span>
                <span>{car.doors}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Hava Yastığı</span>
                <span>{car.air}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Vites</span>
                <span>{car.transmission}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Yakıt</span>
                <span>{car.fuel}</span>
              </div>
            </div>
            {/* btn cta */}
            <a className="cta-btn" href="#booking-section">
              Rezerve Edin
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarBox;
