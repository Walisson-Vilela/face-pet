import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import FeedIcon from "../../Assets/feed.svg";
import StatsIcon from "../../Assets/estatisticas.svg";
import AddPhotoIcon from "../../Assets/adicionar.svg";
import LogoutIcon from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const {pathname} = useLocation;

  React.useEffect (() => {
    setMobileMenu(false)
  },[pathname])

  return (
    <>
      {mobile && (
        <button
          aria-label="menu"
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive} `}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive }`}>
        <NavLink className={styles.navLink} to={"/conta"} end>
          <img src={FeedIcon} alt="Feed Icon" />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink className={styles.navLink} to={"/conta/estatisticas"}>
          <img src={StatsIcon} alt="Stats Icon" />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink className={styles.navLink} to={"/conta/postar"}>
          <img src={AddPhotoIcon} alt="Add Icon" />
          {mobile && "Adicionar Fotos"}
        </NavLink>
        <button className={styles.navLink} onClick={userLogout}>
          <img src={LogoutIcon} alt="Logout Icon" />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
