import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedItem, setEditedItem] = useState('');

  function addItem() {
    if (newItem.trim() !== '') {
      setItems([...items, { name: newItem, bought: false }]);
      setNewItem('');
    }
  }

  function removeItem(index) {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  }

  function editItem(index) {
    setEditingIndex(index);
    setEditedItem(items[index].name);
  }

  function saveEdit() {
    if (editedItem.trim() !== '') {
      const updatedItems = [...items];
      updatedItems[editingIndex] = { ...updatedItems[editingIndex], name: editedItem };
      setItems(updatedItems);
      setEditingIndex(null);
      setEditedItem('');
    }
  }

  function toggleBought(index) {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], bought: !updatedItems[index].bought };
    setItems(updatedItems);
  }

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <div className>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new item"
        />
        <button className='AddButton' onClick={addItem}>Add</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr
                key={index}
                onClick={() => toggleBought(index)}
                style={{
                  backgroundColor: item.bought ? '#39ca0d' : 'white',
                  textDecoration: item.bought ? 'line-through' : 'none',
                  cursor: 'pointer',
                }}
              >
                <td className={`item-name ${item.bought ? 'bought' : ''}`}>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={editedItem}
                      onChange={(e) => setEditedItem(e.target.value)}
                    />
                  ) : (
                    item.name
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <button className='EditButton' onClick={saveEdit}>Save</button>
                  ) : (
                    <>
                      <button className='EditButton' onClick={(e) => { e.stopPropagation(); editItem(index); }}>Edit</button>
                      <button className='RemoveButton' onClick={(e) => { e.stopPropagation(); removeItem(index); }}>Remove</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;