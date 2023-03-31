import './Header.scss';
import Logo from '../../components/Logo/Logo';
import ChangeArticlesViewBtn from '../../components/ChangeArticlesViewBtn/ChangeArticlesViewBtn';
const Header = () => {
  return (
    <div className="header">
      <Logo />
      <ChangeArticlesViewBtn />
    </div>
  );
};

export default Header;
