import React from 'react';
import {NavLink} from 'react-router-dom';
import tuna from '../../assets/imgaes/tuna.svg';
import './style.scss';

function Header({filterByType, categories}) {
  return (
    <header>
        <NavLink to="/" className="title">
          <img src={tuna} alt="logo-tuna"/>
          <span>Admin sushi</span>
        </NavLink>
        <nav className="nav-list">
            <NavLink to="/client" activeClassName="selected" className="nav-item">
              Client
            </NavLink>
            <NavLink to="/categories" activeClassName="selected" className="nav-item">
              Catégories
            </NavLink>     
            <NavLink to="/articles" activeClassName="selected" className="nav-item">
              Articles
            </NavLink>
            <NavLink to="/commande" activeClassName="selected" className="nav-item">
              Commandes
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

