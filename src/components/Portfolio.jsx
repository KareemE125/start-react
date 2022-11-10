/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

import '../css/portfolio.css'

const imagesList = [
    require('../assets/cabin.png'),
    require('../assets/cake.png'),
    require('../assets/circus.png'),
    require('../assets/game.png'),
    require('../assets/safe.png'),
    require('../assets/submarine.png'),
];

export default function Portfolio() 
{

  return <section id='Portfolio' className='container py-5 d-flex flex-column justify-content-center align-items-center'> 
    <h2>portfolio</h2>
    <div id='iDiv'> <i className='fa fa-star'></i> </div>
    <div className="row mt-5">
      {
        imagesList.map((img,index)=><div key={index} className='col-lg-4 mb-2 p-4'>
          <div className='img-card overflow-hidden position-relative'>
            <div className='overlay'>
              <i className='fa fa-plus text-white fa-6x'></i>
            </div>
            <img className='img-fluid' src={img} alt="image"/>
          </div>
        </div>)
      }
    </div>
  </section>
}
