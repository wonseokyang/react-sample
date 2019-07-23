import React from 'react';
import logo from './logo.png';
import './App.css';

const App = () => {
  return (
    <div>
      <div id="top-container">
        <div id="event-bar"></div>
        <nav id="nav-bar">
          <img id="logo" src={logo} />
        </nav>
      </div>
      
      <div id="mid-container">
        <ul id="item-list">
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>        
        </ul>
      </div>
    </div>
  );
};

const Item = () => (
  <li class="item">
    <img class="item-img" src="https://s3.ap-southeast-1.amazonaws.com/com.gomi.store/z5JZhmafTmCETzLi6VvSLojm?response-content-disposition=inline%3B%20filename%3D%22SUN-GEL%2001.jpg%22%3B%20filename%2A%3DUTF-8%27%27SUN-GEL%252001.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJRLWQTI4VUUIOC5Q%2F20190723%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20190723T074706Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=92a0ea22f0d0dcab75595235b399854db32f335743b5b30f0d7021197b07900d" />
    <div class="item-body">
      <h4>bookki</h4>
      <p>24K GOLD SIGNATURE SUN GEL</p>
      <h3>399THB</h3>
    </div>
  </li>
);

export default App;
