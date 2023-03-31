import './Footer.scss';
// import Logo from '../../components/Logo/Logo';
import { numberOfPosts } from '../../slices/FooterSlice';
import { useSelector } from 'react-redux';

const Footer = () => {
  const numberofFetchedArticles = useSelector(numberOfPosts);
  const today = new Date();
  const time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  return (
    <div className="footer">
      <div className="footer__time">
        Number of fetched articles: {numberofFetchedArticles.payload}
      </div>
      <div className="footer__time"> Current time:{time}</div>
    </div>
  );
};

export default Footer;
