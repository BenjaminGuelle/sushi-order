import React from 'react';
// import {Link} from 'react-router-dom';
import logo from '../../assets/imgaes/add.svg';

import './style.scss';

function Articles({sushi, addArticleToOrder}) {
  return (
    <main>
      <ul className="wrapper">
        {
          sushi.map((sushiObject) => (
            <li className='item' key={sushiObject.id} >
              <span>
              {sushiObject.label}
              </span>
              <span>
              {sushiObject.name}
              </span>
              <span>
              {sushiObject.price} €
              </span>
              <button
                className="item_buttons"
                onClick={() => (addArticleToOrder(sushiObject))}
              >
                <img src={logo} alt="add"/>
              </button>
            </li>
          ))
        }
      </ul>
    </main>
  );
}

export default Articles;