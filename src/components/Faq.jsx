import { useState } from "react";

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>SSS</h5>
              <h2>Sıkça Sorulan Sorular</h2>
            
            </div>

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question  ${getClassQuestion("q1")}`}
                >
                  <p>1. Kiralanan Klasik araçların günü uzatılıyor mu ?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  Eğer kullandığınız kiralanan Klasik aracın günü uzatmak istiyorsanız, müşteri hizmetlerini arayarak uzatmak mümkündür.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. Araçtan memnun kalmadım, para iadesi yapılıyor mu ?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  Para iadesi politikamız bulunmamaktadır fakat araçtan menun kalmazsanız farklı bir araçla değişiklik yapmak mümkündür.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>3. Kiraladğım araç arızalandı ne yapmam gerek?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  Araçların arızalanma durumda müşteri hizmetleri ile iletişime geçip teknik ekip yönlendire bilirsiniz, teknik ekip en kısa sürede size ulaşıcaktır.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
