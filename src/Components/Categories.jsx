import  {useState} from 'react'

export default function Categories({items, onClick}) {
  const [activeItem, setActiveItem] = useState(0)
  return (
    <div className="categories">
      <ul>
        {
          items?.map((item, index) => (
            <li className={activeItem === index ? 'active' : ''}
                onClick={() => setActiveItem(index)}
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