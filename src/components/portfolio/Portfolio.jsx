import './portfolio.css';
import Menu from './Menu.json'
import { useState } from 'react';

const Portfolio = () => {
  const [items,setItems] = useState(Menu);
  const filterItem = (categoryItem)=>{
    const updatedItems = Menu.filter((item)=>{
      return item.category.includes(categoryItem)
    })
    setItems(updatedItems)
  }
  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Recent Projects</h2>

      <div className="work__filters">
        <span className="work__item" onClick={()=>setItems(Menu)}>All</span>
        <span className="work__item" onClick={()=>filterItem("Machine Learning")}>Machine Learning</span>
        <span className="work__item" onClick={()=>filterItem("Web Application")}>Web Application</span>
      </div>

      <div className="work__container grid">
        {items.map((item)=>{
          const{id,src,url,title,category,desc} = item;
          return(
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={src} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category.join(' + ')}</span>
              <h3 className="work__title">{title}</h3>
              <p className="work__desc">{desc}</p>
              <a href={url} className="work__button" target='_blank'>
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio