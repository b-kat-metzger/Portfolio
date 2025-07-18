import React from 'react'

const Card = (props) => {
  return (
    <div className="timeline__item">
        <i className={props.icon}></i>
            <div className="timeline__dateloc">
                <span className="timeline__date">{props.year}</span>
                {props.city && 
                    <span className='timeline__city'>
                    <i className="icon-location-pin"></i>
                    {' ' +props.city}
                    </span>
                }
            </div>
        <h3 className="timeline__title">{props.title} | {props.location}</h3>
        
        <p className="timeline__text">{props.desc}</p>
    </div>
  )
}

export default Card