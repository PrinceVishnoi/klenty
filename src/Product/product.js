import React, { useEffect, useState } from 'react';
import Items from './counter';
import './product.css'
const Api = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(' https://fakestoreapi.com/products/');
    setUsers(await response.json());

  }
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {
        users.map((e) => {
          return (
            <div>
              <div className="card" key={e.id}>
                <img src={e.image} className="card-img-top" alt="img" />
                <div className="card-body">
                  <h5 className="card-title">{e.title}</h5>
                  <p className="card-text">{e.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li id="Category"className="list-group-item">Category-{e.category}</li>
                  <li id="Rating"className="list-group-item">Rating -{e.rating.rate} Counts-{e.rating.count}</li>
                  <li id="price"className="list-group-item">Price- ₹{e.price}</li>
                </ul>
                <Items/>
              </div>
            </div>
          )
        })

      }
    </>
  )
}
export default Api;