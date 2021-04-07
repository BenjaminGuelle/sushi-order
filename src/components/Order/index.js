import React from 'react';
// import {Link} from 'react-router-dom';

import './style.scss';

function Order({newOrder}) {
  const arr = [];
  const verifyLi = (article_id) => {
    const arrId = arr.find(item => item === article_id);
    if (arrId == article_id) {
      return true;
    }
    else return false;
  };

  const resultCheck = (newOrder) => {
    let total = 0;
    for (let i = 0; i < newOrder.length; i++) {
      total = total + newOrder[i].price;
    }
    return total;
  }

  return (
    <main>
      <ul className="wrapper order">
        <li className="firstRow rows">
          <span>Nom</span>
          <span>Quantité</span>
          <span>prix</span>
          <span>total</span>
        </li>
        {
          newOrder.map((article, key) => {
            const articleNbr = newOrder.filter(item => item.id === article.id).length;
            if ( verifyLi(article.id) === false ) {
              arr.push(article.id || null);
              return (
                <li key={key} className="article">
                  <span>{article.label}-{article.name}</span>
                  <span>
                    X{article.nombre * articleNbr}
                  </span>
                  <span>
                    {article.price}
                  </span>
                  <span>
                    {article.price * articleNbr}
                  </span>
                </li>
              )
            }
          })
        }
      </ul>
      <div>
        total : {resultCheck(newOrder)}
      </div>
    </main>
  );
}

export default Order;