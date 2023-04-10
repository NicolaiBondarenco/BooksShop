import React from 'react'
import { Link } from 'react-router-dom'
import './Item.scss'

interface IProps {
  categories: string[]
  title: string
  image: string
  author: string[]
  desc: string
  id: string
}

export const Item: React.FC<IProps> = (props) => {
  const { categories, title, image, author, desc, id } = props
  return (
    <div className="item">
      <Link
        to={`/detailsBook/${id}`}
        state={{ categories, title, image, author, desc }}
      >
        <img src={image} alt="Image" />
      </Link>
      <div className="item__inner">
        <p className="item__categories"> {categories[0]} </p>
        <p className="item__title"> {title} </p>
        <p className="item__author">
          {author
            ? author.map((item: string) => <span key={item}> | {item} </span>)
            : null}
        </p>
      </div>
    </div>
  )
}
