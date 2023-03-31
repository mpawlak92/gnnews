import { useEffect, useRef } from 'react';
import './Popup.scss';

const PopupBtn = ({ children, popupClose, trigger }) => {
  const popupRef = useRef();

  useEffect(() => {
    const closePopuphandler = (e) => {
      if (e.target.classList.contains('popup')) {
        popupClose();
      }
    };
    document.addEventListener('click', closePopuphandler);
    return () => {
      document.addEventListener('click', closePopuphandler);
    };
  });

  return trigger ? (
    <div className="popup">
      <div className="popup__inner" ref={popupRef}>
        <button
          className="close-btn"
          aria-label="close popap window button"
          onClick={popupClose}
        ></button>
        {children}
      </div>
    </div>
  ) : (
    ''
  );
};

export default PopupBtn;
