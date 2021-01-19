import React from 'react'
import  {useState} from 'react'

const Categories = React.memo(
  ({items, onClickItem}) => {
  const [activeItem, setActiveItem] = useState(0)
  const onSelectItem = (index) => {
    setActiveItem(index)
    onClickItem(index)
  }

  return (
    <div className="categories">
      <ul>
        {
          items?.map((item, index) => (
            <li className={activeItem === index ? 'active' : ''}
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