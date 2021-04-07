import React, { useState, useEffect } from 'react';
import {Route} from 'react-router-dom';

import './style.scss';
import {sushiDatas} from '../../datas/articles';
import {categoriesDatas} from '../../datas/categories';

import Header from '../../components/Header';
import Articles from '../../components/Articles';
import Order from '../../components/Order';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newOrder, setNewOrder] = useState([]);

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
    console.log('CLICK FILTER');
    console.log(type);
    setLoading(true);
    if ( type !== 'Tous') {
      const newArticleList = sushiDatas.filter(sushi => sushi.label === type);
      setArticles(newArticleList);
    }
    else return fetchArticles();
  };

  /**
   * add article to new order
   * @param {*} id 
   * @returns 
   */
  const addArticleToOrder = (article) => {
    setNewOrder([...newOrder, article]);
  };

  // &&& USEEFFECT &&&
  useEffect(() => {
    fetchArticles();
    fetchCategories();
  }, []);

  return (
    <div className="App">
      <Route path="/">
        <Header filterByType={filterArticles} categories={categories} />
      </Route>
      <Route exact path="/articles">
        <Articles  sushi={articles} addArticleToOrder={addArticleToOrder} />
      </Route>
      <Route exact path="/commandes">
        <Order newOrder={newOrder} />
      </Route>
    </div>
  );
}

export default App;
