import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct
} from '../redux/productSlice';

import './Products.css';

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, loading, error } = useSelector(state => state.products);

  const [newTitle, setNewTitle] = useState('');
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAdd = () => {
    if (!newTitle.trim()) return;
    dispatch(addProduct({ title: newTitle }));
    setNewTitle('');
  };

  const handleUpdate = () => {
    dispatch(updateProduct({ id: editId, title: editTitle }));
    setEditId(null);
    setEditTitle('');
  };

  return (
    <div className="product-container">
      <div className="product-header">
        <h2>🛍️ Product Management (Dummy API)</h2>
        <button className="btn btn-back" onClick={() => navigate('/dashboard')}>
          ← Back to Dashboard
        </button>
      </div>

      <div className="product-add">
        <input
          className="product-input"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Add Product Title"
        />
        <button className="btn btn-add" onClick={handleAdd}>Add</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul className="product-list">
        {items.slice(0, 10).map(p => (
          <li key={p.id} className="product-item">
            {editId === p.id ? (
              <>
                <input
                  className="product-input"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <button className="btn btn-save" onClick={handleUpdate}>Save</button>
              </>
            ) : (
              <>
                <span>{p.title}</span>
                <div>
                  <button
                    className="btn btn-edit"
                    onClick={() => {
                      setEditId(p.id);
                      setEditTitle(p.title);
                    }}
                  >
                    Edit
                  </button>
                  <button className="btn btn-delete" onClick={() => dispatch(deleteProduct(p.id))}>
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
