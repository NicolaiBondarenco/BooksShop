import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './DetailsBook.scss'

export const DetailsBook = () => {
  let { state } = useLocation()
  const { categories, title, image, author, desc } = state
  return (
    <div className="detailsBook">
      <div className="detailsBook__wrapper">
        <div className="detailsBook__img">
          <img src={image} alt="Book" />
        </div>
        <div className="detailsBook__info">
          <p className="detailsBook__info-category">
            {categories
              ? categories.map((item: string) => (
                  <span key={item}> {item} </span>
                ))
              : null}
          </p>
          <h3 className="detailsBook__info-title">{title}</h3>
          <p className="detailsBook__info-author">
            {author
              ? author.map((item: string) => <span key={item}> {item} </span>)
              : null}
          </p>
          <p className="detailsBook__info-desc">{desc}</p>
        </div>
      </div>
      <div className="detailsBook__back">
        <Link to="/allBooks">
          <button className="detailsBook__back-btn">Back</button>
        </Link>
      </div>
    </div>
  )
}
