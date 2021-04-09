import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss';

function Customer({newCustomer, onInputChange, handleSendForm}) {
    const {firstName, lastName, adress} = newCustomer;
  return (
    <main>
        <h2>
            Enregistrer un nouveau client :
        </h2>
      <form className="form-customer">
          <input 
            type="text" 
            name="firstName" 
            className="form-input firstName" 
            placeholder="Prénom"
            value={firstName}
            onChange={onInputChange}
          />
          <input 
            type="text" 
            name="lastName" 
            className="form-input lastName" 
            placeholder="Nom"
            value={lastName}
            onChange={onInputChange}
          />
          <input 
            type="text" 
            name="adress" 
            className="form-input adress" 
            placeholder="Adresse"
            value={adress}
            onChange={onInputChange}
          />
          <Link
            to="/commande"
            className="btn-form"
            onClick={() => {
                // e.preventDefault();
                handleSendForm();
            }}
          >
              Enregister
          </Link>
      </form>
    </main>
  );
}

export default Customer;