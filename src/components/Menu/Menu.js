import React from 'react';
import styles from './Menu.module.css';
import menu from './Ninas_Menu.png';
import { Container } from 'react-bootstrap';


const Menu = () => (
  <div className={styles.Menu}>
      <img src={menu} width='60%' height='30%' alt="Menu" className='d-inline-block'></img>
  </div>
);

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
