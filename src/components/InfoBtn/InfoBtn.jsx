import { useState } from 'react';
import Popup from '../Popup/Popup';
import '../InfoBtn/InfoBtn.scss';

const InfoBtn = () => {
  const [triggerPopup, setTriggerPopup] = useState(false);
  const popupClose = () => {
    setTriggerPopup(false);
  };
  return (
    <>
      <button
        className="info-btn"
        onClick={() => {
          setTriggerPopup(true);
        }}
      >
        Info
      </button>
      <Popup trigger={triggerPopup} popupClose={popupClose}>
        <div className="info-popup-content">
          <h2 className="info-popup-header">The coolest:</h2>
          <p className="info-popup-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            accusamus maiores reprehenderit ex culpa dignissimos incidunt
            accusantium, esse repellendus dolorem totam, pariatur quidem
            inventore provident. Officiis accusantium perspiciatis veniam
            nostrum.
          </p>
          <h2 className="info-popup-header--red">Difficulties:</h2>
          <p className="info-popup-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum non
            numquam, officiis quam vero autem ratione doloribus ea ipsum, id
            blanditiis saepe est architecto, provident minima dolore sunt
            aliquid nisi?
          </p>
        </div>
        <div className="info-popup-thanks">
          <div className="thanks">Thank you for considering my candidacy.</div>
          <div>Michał Pawlak</div>
        </div>
      </Popup>
    </>
  );
};

export default InfoBtn;
