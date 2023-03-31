import propTypes from 'prop-types';
import { useState } from 'react';
import noImg from '../../assets/no-image.png';
import Popup from '../Popup/Popup';
import './ArticleBox.scss';
const ArticleBox = ({
  author,
  content,
  description,
  img,
  title,
  publishedDate,
  source,
  url,
}) => {
  const [triggerPopup, setTriggerPopup] = useState(false);

  const handleImg = () => {
    if (img !== null) {
      return <img className="articleImg" src={img} alt="article image"></img>;
    } else {
      return (
        <img
          className="articleNoImg"
          src={noImg}
          alt="default article image"
        ></img>
      );
    }
  };

  const popupClose = () => {
    setTriggerPopup(false);
  };
  return (
    <>
      <div
        className="articleBox"
        onClick={() => {
          setTriggerPopup(true);
        }}
      >
        <div className="articleBox__img">{handleImg()}</div>
        <div className="articleBox__content">
          <div className="articleBox__info">
            <div className="articleSorce">Source: {source}</div>
            <div className="articlePublishedDate">
              Published date: {publishedDate.split('T')[0]}
            </div>
          </div>
          <div className="articleBox__title">{title}</div>
          <div className="articleBox__description">{description}</div>
        </div>
        <div className="articleBox__overlay"></div>
      </div>
      <Popup trigger={triggerPopup} popupClose={popupClose}>
        <div className="popup-content">
          <div className="article-author">Author: {author}</div>
          <div className="article-sorce-url">
            Article sorce: <a href={url}>Click here</a>
          </div>
          <h2>Article content:</h2>
          <div className="article-content">{content}</div>
        </div>
      </Popup>
    </>
  );
};

export default ArticleBox;

ArticleBox.propTypes = {
  img: propTypes.string,
  description: propTypes.string,
  title: propTypes.string.isRequired,
  source: propTypes.string.isRequired,
  publishedDate: propTypes.string.isRequired,
};
