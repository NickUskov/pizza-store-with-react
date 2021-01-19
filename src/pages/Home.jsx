import React from "react";

import {useDispatch, useSelector} from "react-redux"
import {setCategory} from "../redux/actions/filters"

import {Categories, SortPopup} from "../Components";
import PizzaBlock from "../Components/PizzaBlock";

const categoryNames = [
  'Все',
  'Мясные',
  'Вегетерианские',
  'Гриль',
  'Острые',
  'Закрытые',
]
const sortItems = [
  {name: 'популяонсти', type: 'popular'},
  {name: 'цене', type: 'price'},
  {name: 'алфавиту', type: 'alphabet'},
]


export default function Home() {

  const dispatch = useDispatch()
  const {pizzas} = useSelector(({filters, pizza}) => {
    return {
      pizzas: pizza.items,
    }
  })

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(index) => onSelectCategory(index)}
          items={categoryNames}/>
        <SortPopup items={sortItems}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas?.map(pizza => (
          <PizzaBlock
            pizza={pizza}
            key={pizza.id}/>
        ))}
      </div>
    </div>
  )
}