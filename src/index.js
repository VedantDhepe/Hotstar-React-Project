import React from 'react'
import ReactDOM from 'react-dom';
import Card from './App'
import Sdata from "./Sdata";

function hotStarCard(val){
  return (
    <Card
       imgsrc = {val.imgsrc_}
        Category = {val.category_}
        title =  {val.title_}
        link=  {val.link_}
    />
  );
}

ReactDOM.render(
  <>
  <h1 className='heading'>Disney+ Hotstar Shows</h1>
  {Sdata.map(hotStarCard)}
  </>,
  document.getElementById('root'),
  
);