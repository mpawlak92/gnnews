import './Header.scss';
import Logo from '../../components/Logo/Logo';
import ChangeArticlesViewBtn from '../../components/ChangeArticlesViewBtn/ChangeArticlesViewBtn';
import InfoBtn from '../../components/InfoBtn/InfoBtn';
const Header = () => {
  return (
    <div className="header">
      <Logo />
      <div className='header__buttons'>
        <InfoBtn />
        <ChangeArticlesViewBtn />
      </div>
    </div>
  );
};

export default Header;
