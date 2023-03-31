import propTypes from 'prop-types';
import { useState } from 'react';
import Popup from '../Popup/Popup';
import './ArticleListItem.scss';
const ArticlesListItem = ({
  author,
  content,
  title,
  url,
  source,
  publishedDate,
}) => {
  const [triggerPopup, setTriggerPopup] = useState(false);
  const popupClose = () => {
    setTriggerPopup(false);
  };
  return (
    <>
      <div
        className="list-item"
        onClick={() => {
          setTriggerPopup(true);
        }}
      >
        <div className="list-item__component">
          <span className="list-heder">Title: </span>
          {title}
        </div>
        <div className="list-item__component">
          <span className="list-heder">Source: </span>
          {source}
        </div>
        <div className="list-item__component">
          <span className="list-heder">Publish date :</span>
          {publishedDate.split('T')[0]}
        </div>
        <div className="list-item__underline"></div>
      </div>
      <Popup trigger={triggerPopup} popupClose={popupClose}>
        <div className="article-content">
          <h2 className="article-header">Article content:</h2>
          <div className="">{content || 'No data check link bellow'}</div>
        </div>
        <div className="article-info">
          <div className="article-author">
            Author: {author || 'No data check link bellow'}
          </div>
          <div>
            Article sorce: <a href={url}>Click here</a>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default ArticlesListItem;

ArticlesListItem.propTypes = {
  title: propTypes.string.isRequired,
  source: propTypes.string.isRequired,
  publishedDate: propTypes.string.isRequired,
};
