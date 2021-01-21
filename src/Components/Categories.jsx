import React from 'react'
import {useState} from 'react'

const Categories = React.memo(
  ({activeCategory, items, onClickItem}) => {
    const onSelectItem = (index) => {
      onClickItem(index)
    }

    return (
      <div className="categories">
        <ul>
          {
            items?.map((item, index) => (
              <li className={activeCategory === index ? 'active' : ''}
                  onClick={() => onSelectItem(index)}
                  key={index}
              >
                {item}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
)

export default Categories