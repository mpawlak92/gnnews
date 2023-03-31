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
            What I liked the most was that I could finally write my modal from
            scratch, I did not have time for it before.
          </p>
          <h2 className="info-popup-header--red">Difficulties:</h2>
          <p className="info-popup-text">
            The task was quite simple, I had done everything before. Although,
            due to my affairs, I did not have much time to refine them. What
            caused me the most difficulties was the side menu, especially
            adjusting it to smaller screens, e.g. a 14 inch display in full hd.
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
