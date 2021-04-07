import React from 'react';
import {NavLink} from 'react-router-dom';
import tuna from '../../assets/imgaes/tuna.svg';
import './style.scss';

function Header({filterByType, categories}) {
  return (
    <header>
        <div className="title">
          <img src={tuna} alt="logo-tuna"/>
          <span>Admin sushi</span>
        </div>
        <nav className="nav-list">
            <NavLink to="/articles" activeClassName="selected" className="nav-item">
              Articles
            </NavLink>
            <NavLink to="/commandes" activeClassName="selected" className="nav-item">
              Order
            </NavLink>     
        </nav>
        <div className="filter-articles">
        {
          categories.map((categoryObj) => (
            <button key={categoryObj.id} className="btn-filter" onClick={
              () => {
                filterByType(categoryObj.label);
              }
            }>
              {categoryObj.label}
            </button>
          ))
        }        
        </div>
    </header>
  );
}

export default Header;

