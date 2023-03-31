import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo = () => {
  return (
    <Link to="country/usa" className="logo-link">
      <div className="header__logo">
        <p>
          <span className="logo-decoration">gn</span>News
        </p>
      </div>
    </Link>
  );
};

export default Logo;
