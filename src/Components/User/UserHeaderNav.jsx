import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import FeedIcon from "../../Assets/feed.svg";
import StatsIcon from "../../Assets/estatisticas.svg";
import AddPhotoIcon from "../../Assets/adicionar.svg";
import LogoutIcon from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null)
  const { userLogout } = React.useContext(UserContext);
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.navLink} to={"/conta"} end>
        <img src={FeedIcon} alt="Feed Icon" />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink className={styles.navLink} to={"/conta/estatisticas"}>
        <img src={StatsIcon} alt="Stats Icon" />
        {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink className={styles.navLink} to={"/conta/postar"}>
        <img src={AddPhotoIcon} alt="Add Icon" />
        {mobile && 'Adicionar Fotos'}
      </NavLink>
      <button className={styles.navLink} onClick={userLogout}>
        <img src={LogoutIcon} alt="Logout Icon" />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
