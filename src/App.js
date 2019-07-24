import React from 'react';
import logo from './logo.png';
import './App.css';

const items = [];
const terms = [
  'นโยบายการรักษาข้อมูลส่วนบุคคล',
  'ข้อตกลงและเงื่อนไข',
  'นโยบายความปลอดภัยของเนื้อหา'
];

for (let i = 0; i < 12; i ++) {
  items.push(Item());
}

const App = () => {
  return (
    <div>
      <Header />
      <div id="container">
        <ul id="item-list">
          {items.map(() => <Item />)}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

const Header = () => (
  <header>
    <div id="event-bar"></div>
    <nav id="nav-bar">
      <img id="logo" src={logo} />
    </nav>
  </header>
);

const Footer = () => (
  <footer>
    <nav class="terms">
      <ul>
        {
          terms.map(term => {
            return <Term term={term} /> }
          )
        }
      </ul>
    </nav>
    <div class="corpinfo">
      <div>
        <p>Gomi corporation Inc.</p>
        <p>ทั้งหมด : David Jang. (장건영) | เลขทะเบียนธุรกิจ : 613-86-01212</p>
        <p>2F, 8 Nonhyeon-ro 71-gil, Gangnam-gu, Seoul</p>
        <p>통신판매업신고 : 2019-서울강남-01431</p>
      </div>
    </div>
    <div class="copyright">
      <p>2019 ⓒ Gomi corporation Inc. All rights reserved.</p>
    </div>
  </footer>
);

function Item () {
  return (
    <li class="item">
      <img class="item-img" src="https://s3.ap-southeast-1.amazonaws.com/com.gomi.store/z5JZhmafTmCETzLi6VvSLojm?response-content-disposition=inline%3B%20filename%3D%22SUN-GEL%2001.jpg%22%3B%20filename%2A%3DUTF-8%27%27SUN-GEL%252001.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJRLWQTI4VUUIOC5Q%2F20190724%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20190724T002040Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=2c63c3e7aade1f81d9349003337ea76bc7ca3bf877b87eecdcc612500e95f96d" />
      <div class="item-body">
        <h4>bookki</h4>
        <p>24K GOLD SIGNATURE SUN GEL</p>
        <h3>399THB</h3>
      </div>
    </li>
  );
}

function Term (props) {
  return (
    <li class="term">
      <p>{props.term}</p>
    </li>
  );
}


export default App;