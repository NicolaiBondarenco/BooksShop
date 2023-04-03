import React from 'react'
import { Link } from 'react-router-dom'
import './Item.scss'

export const Item = (props) => {
  const { categories, title, img, author, desc, id } = props
  return (
    <div className="item">
      <Link
        to={`/detailsBook/${id}`}
        state={{ categories, title, img, author, desc }}
      >
        <img src={img} alt="Image" />
      </Link>
      <div className="item__inner">
        <p className="item__categories"> {categories[0]} </p>
        <p className="item__title"> {title} </p>
        <p className="item__author">
          {author
            ? author.map((item) => <span key={item}> | {item} </span>)
            : null}
        </p>
      </div>
    </div>
  )
}
