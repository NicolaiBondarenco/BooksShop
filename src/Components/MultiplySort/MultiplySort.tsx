import React from 'react'
import './MultiplySort.scss'

interface IProps {
  data: { name: string; value: string; id: number }[]
  title: string
  idHtml: string
  onChangeValue: (value: string) => void
}

export const MultiplySort: React.FC<IProps> = ({
  data,
  title,
  idHtml,
  onChangeValue,
}) => {
  return (
    <div className="multiplySort">
      <label htmlFor={idHtml}>{title}: </label>
      <select
        name="categories"
        id={idHtml}
        onChange={(e) => onChangeValue(e.target.value)}
      >
        {data.map((item) => (
          <option key={item.id} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  )
}
