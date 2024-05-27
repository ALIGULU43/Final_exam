
import React from 'react'
import Shop  from './component/Shob'
import About from './component/About';
import Sale from './component/Sale';
import Last from './component/Last';
import 'bootstrap/dist/css/bootstrap.css';
import Form from './component/Form';
import Menu from './component/Menuu';
import Collection from './Collection';
import Feature from './assets/Feature';

const App = () => {
  return (
    <div>
      <Menu/>
      <Shop/>
      <About/>
      <Collection/>
      <Feature/>
      <Sale/>
      <Last/>
      <Form/>
     
    </div>
  )
}

export default App