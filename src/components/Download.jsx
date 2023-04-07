import Img1 from "../images/download/appstore.svg";
import Img2 from "../images/download/googleapp.svg";

function Download() {
  return (
    <>
      <section className="download-section">
        <div className="container">
          <div className="download-text">
            <h2>Kanpanyalardan yararlanmak için uygulamamızı indirin</h2>
            <p>
            Yaz ve Kış kampanyalarımız ilk durağı uygulamalarımıza gelmektedir, eşsiz fırsatlara sizde sahip olun, uygulamamıza bekliyoruz.
            </p>
            <div className="download-text__btns">
              <img alt="download_img" src={Img2} />
              <img alt="download_img" src={Img1} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;
