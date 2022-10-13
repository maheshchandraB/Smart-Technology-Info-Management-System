import React from 'react'
import './Card.css'
import {Link
} from "react-router-dom";
import Chm from '../../Chm';
function Card({title, description, imglink, info}) {
    return(
        <div className="card">
          <div className='imgwrap'>
          <img src={imglink}/>
          </div>
          <h1>{title}</h1>
          <Link to="/chm" > More Info</Link>
          <p>{description}</p>
        </div>
      );
}


export default Card
