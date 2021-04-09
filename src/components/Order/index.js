import React from 'react';
// import {Link} from 'react-router-dom';
import arrow from './../../assets/imgaes/left-arrow.svg';
import trash from './../../assets/imgaes/trash.svg';
import './style.scss';

function Order({newOrder, customer, activeCustomer, isActive, newCustomer, handleResetOrder}) {
  const {firstName, lastName, adress} = newCustomer;
  const arr = [];
  const verifyLi = (article_id) => {
    const arrId = arr.find(item => item === article_id);
    if (arrId === article_id) {
      return true;
    }
    else return false;
  };

  const resultCheck = (newOrder) => {
    let total = 0;
    if (newOrder != undefined) {
      console.log(newOrder);
      for (let i = 0; i < newOrder.length; i++) {
        total = total + newOrder[i].price;
      }
      return total;
    }
    else return 0; 
  }

  return (
    <main>
      <div className="wrapper order">
        <button className="btn-customer" onClick={activeCustomer}>
          <img src={arrow} alt="arrow" className={isActive ? 'img-btn' : 'img-btn active'} />
          <h2>CLENT</h2>
        </button>
        <div className={isActive ? 'order_customer' : 'order_customer active'} >
          <span className="order_text">
            {customer ? lastName : 'Nom'}
          </span>
          <span className="order_text">
          {customer ? firstName : 'Prénom'}
          </span>
          <span className="order_text">
          {customer ? adress : 'Adresse'}
          </span>
        </div>
        <ul className={isActive ? 'ordered' : 'ordered active'}>
          <h2>COMMANDE</h2>
          <li className="first-row">
            <div className="first-item title">
              <span>
                Nom
              </span>
            </div>
            <div className="first-item">
              <span>
                Quantité
              </span>
            </div>
            <div className="first-item">
              <span>
                prix
              </span>
            </div>
            <div className="first-item">
              <span>
                total
              </span>
            </div>
          </li>
          <ul className="list-order">
          {
            newOrder.map((article, key) => {
              const articleNbr = newOrder.filter(item => item.id === article.id).length;
              if ( verifyLi(article.id) === false ) {
                arr.push(article.id || null);
                return (
                  <li className="article" key={key}>
                    <div className="box title">
                      <span>{article.label}</span>
                      <span>{article.name}</span>
                    </div>
                    <div className="box quantity">
                      <span>
                        X{article.nombre * articleNbr}
                      </span>
                    </div>
                    <div className="box price_u">
                      <span>
                        {article.price}€
                      </span>
                    </div>
                    <div className="box price_t">
                      <span>
                        {article.price * articleNbr}€
                      </span>
                    </div>
                  </li>
                )
              }
            })
          }
          </ul>
        </ul>
        <div className="order-result">
          <span>
            total : 
          </span>
          <span>
            {resultCheck(newOrder)}€
          </span> 
        </div>
        <button className="order-trash" onClick={handleResetOrder} >
            <img src={trash} alt="trash" />
        </button>
      </div>
    </main>
  );
}

export default Order;