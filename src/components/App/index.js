import React, { useState, useEffect } from 'react';
import {Route} from 'react-router-dom';

import './style.scss';
import {sushiDatas} from '../../datas/articles';
import {categoriesDatas} from '../../datas/categories';

import Header from '../../components/Header';
import Articles from '../../components/Articles';
import Categories from '../../components/Categories';
import Order from '../../components/Order';
import Home from '../../components/Home';
import Customer from '../../components/Customer';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newOrder, setNewOrder] = useState([]);
  const [customer, setCustomer] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    firstName: '',
    lastName: '',
    adress: '',
  });
  const [isActiveOrder, setIsActiveOrder] = useState(true);


  /**
   * get all categories
   * @returns categories
   */
   const fetchCategories = () => {
    setLoading(true);
    if (categoriesDatas !== undefined) {
      setCategories(categoriesDatas);
      setLoading(false);
    }
    else {
      setLoading(false);
      return false;
    }
  };

  /**
   * get all articles
   * @returns articles
   */
  const fetchArticles = () => {
    setLoading(true);
    if (sushiDatas !== undefined) {
      setArticles(sushiDatas);
      setLoading(false);
    }
    else {
      setLoading(false);
      return false;
    }
  };

  /**
   * filter articles list by categorie
   * @param {*} type 
   * @returns 
   */
  const filterArticles = (type) => {
    setLoading(true);
    if ( type !== 'Tous') {
      const newArticleList = sushiDatas.filter(sushi => sushi.label === type);
      setArticles(newArticleList);
      setLoading(false);
    }
    else {
      setLoading(false);
      return fetchArticles()
    };
  };

  /**
   * add article to new order
   * @param {*} id 
   * @returns 
   */
  const addArticleToOrder = (article) => {
    setNewOrder([...newOrder, article]);
  };

  const handleActiveCustomer = () => {
    setIsActiveOrder(!isActiveOrder);
    console.log(isActiveOrder);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setNewCustomer({
      ...newCustomer,
      [e.target.name]: value,
    });
    console.log(newCustomer);
  };

  const handleSendForm = () => {
    setCustomer(true);
  };

  const handleResetOrder = () => {
    setNewCustomer({
      firstName: '',
      lastName: '',
      adress: '',
    });
    setNewOrder([]);
    setCustomer(false);
  }

  // &&& USEEFFECT &&&
  useEffect(() => {
    fetchArticles();
    fetchCategories();
  }, []);

  return (
    <div className="App">
      <Header filterByType={filterArticles} categories={categories} />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/categories">
        <Categories categories={categories} filterByType={filterArticles} />
      </Route>
      <Route exact path="/articles">
        <Articles sushi={articles} addArticleToOrder={addArticleToOrder} />
      </Route>
      <Route exact path="/commande">
        <Order
          newOrder={newOrder}
          customer={customer}
          newCustomer={newCustomer}
          activeCustomer={handleActiveCustomer}
          isActive={isActiveOrder}
          handleResetOrder={handleResetOrder}
        />
      </Route>
      <Route exact path="/client">
        <Customer
          newCustomer={newCustomer}
          onInputChange={handleInputChange}
          handleSendForm={handleSendForm}
        />
      </Route>
    </div>
  );
}

export default App;
