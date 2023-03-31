import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import bulgariaFlagge from '../../assets/bulgaria-flag.png';
import chinaFlagge from '../../assets/china-flag.png';
import franceFlagge from '../../assets/france-flag.png';
import germanyFlagge from '../../assets/germany-flag.png';
import ukFlagge from '../../assets/great-britain-flag.png';
import hungaryFlagge from '../../assets/hungary-flag.png';
import norwayFlagge from '../../assets/norway-flag.png';
import polandFlagge from '../../assets/poland-flag.png';
import swedenFlagge from '../../assets/sweden-flag.png';
import usaFlagge from '../../assets/usa-flag.png';

import './SideBar.scss';
const SideBar = () => {
  const [click, setClick] = useState(false);
  const handleMenuClick = (e) => {
    setClick(!click);
  };
  const sideMenuToggle = click ? 'slickBar--isactive ' : '';
  const sideMenuTextToggle = click
    ? 'sidebarContainerLink__text--isactive '
    : '';

  const menuBtnToggle = click ? 'sidebar-btn--clicked ' : '';
  return (
    <>
      <button
        className={menuBtnToggle + 'sidebar-btn'}
        onClick={handleMenuClick}
        aria-label="Hamburger menu"
      ></button>

      <div className="sidebarContainer">
        <div className={sideMenuToggle + 'slickBar'}>
          <NavLink
            end
            to="/country/usa"
            className={({ isActive }) =>
              isActive ? 'sidebarContainerLink--active' : 'sidebarContainerLink'
            }
            onClick={() => {
              setClick(false);
            }}
          >
            <img src={usaFlagge} alt="usa flag" className="flag" />
            <p className={sideMenuTextToggle + 'sidebarContainerLink__text'}>
              USA
            </p>
          </NavLink>

          <NavLink
            to="/country/germany"
            className={({ isActive }) =>
              isActive ? 'sidebarContainerLink--active' : 'sidebarContainerLink'
            }
            onClick={() => {
              setClick(false);
            }}
          >
            <img src={germanyFlagge} alt="germany flag" className="flag" />

            <p className={sideMenuTextToggle + 'sidebarContainerLink__text'}>
              Germany
            </p>
          </NavLink>

          <NavLink
            to="/country/poland"
            className={({ isActive }) =>
              isActive ? 'sidebarContainerLink--active' : 'sidebarContainerLink'
            }
            onClick={() => {
              setClick(false);
            }}
          >
            <img src={polandFlagge} alt="poland flag" className="flag" />

            <p className={sideMenuTextToggle + 'sidebarContainerLink__text'}>
              Poland
            </p>
          </NavLink>
          <NavLink
            to="/country/england"
            className={({ isActive }) =>
              isActive ? 'sidebarContainerLink--active' : 'sidebarContainerLink'
            }
            onClick={() => {
              setClick(false);
            }}
          >
            <img src={ukFlagge} alt="Great Britan flag" className="flag" />

            <p className={sideMenuTextToggle + 'sidebarContainerLink__text'}>
              England
            </p>
          </NavLink>
          <NavLink
            to="/country/france"
            className={({ isActive }) =>
              isActive ? 'sidebarContainerLink--active' : 'sidebarContainerLink'
            }
            onClick={() => {
              setClick(false);
            }}
          >
            <img src={franceFlagge} alt="france flag" className="flag" />

            <p className={sideMenuTextToggle + 'sidebarContainerLink__text'}>
              France
            </p>
          </NavLink>
          <NavLink
            to="/country/bulgaria"
            className={({ isActive }) =>
              isActive ? 'sidebarContainerLink--active' : 'sidebarContainerLink'
            }
            onClick={() => {
              setClick(false);
            }}
          >
            <img src={bulgariaFlagge} alt="bulgaria flag" className="flag" />

            <p className={sideMenuTextToggle + 'sidebarContainerLink__text'}>
              Bulgaria
            </p>
          </NavLink>
          <NavLink
            to="/country/norwey"
            className={({ isActive }) =>
              isActive ? 'sidebarContainerLink--active' : 'sidebarContainerLink'
            }
            onClick={() => {
              setClick(false);
            }}
          >
            <img src={norwayFlagge} alt="norway flag" className="flag" />

            <p className={sideMenuTextToggle + 'sidebarContainerLink__text'}>
              Norway
            </p>
          </NavLink>
          <NavLink
            to="/country/sweden"
            className={({ isActive }) =>
              isActive ? 'sidebarContainerLink--active' : 'sidebarContainerLink'
            }
            onClick={() => {
              setClick(false);
            }}
          >
            <img src={swedenFlagge} alt="sweden flag" className="flag" />

            <p className={sideMenuTextToggle + 'sidebarContainerLink__text'}>
              Sweden
            </p>
          </NavLink>
          <NavLink
            to="/country/china"
            className={({ isActive }) =>
              isActive ? 'sidebarContainerLink--active' : 'sidebarContainerLink'
            }
            onClick={() => {
              setClick(false);
            }}
          >
            <img src={chinaFlagge} alt="china flag" className="flag" />

            <p className={sideMenuTextToggle + 'sidebarContainerLink__text'}>
              China
            </p>
          </NavLink>
          <NavLink
            to="/country/hungary"
            className={({ isActive }) =>
              isActive ? 'sidebarContainerLink--active' : 'sidebarContainerLink'
            }
            onClick={() => {
              setClick(false);
            }}
          >
            <img src={hungaryFlagge} alt="hungary flag" className="flag" />

            <p className={sideMenuTextToggle + 'sidebarContainerLink__text'}>
              Hungary
            </p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SideBar;
