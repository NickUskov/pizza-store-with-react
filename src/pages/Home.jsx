import React from "react";

import {useDispatch, useSelector} from "react-redux"
import {setCategory, setSortBy} from "../redux/actions/filters"

import {Categories, SortPopup, PizzaBlock, PizzaLoadingBlock} from "../Components";
import {fetchPizzas} from "../redux/actions/pizzas";
import {addPizzaToCart} from "../redux/actions/cart";

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
  const {pizzas, isLoaded} = useSelector(({filters, pizza}) => {
    return {
      pizzas: pizza.items,
      isLoaded: pizza.isLoaded
    }
  })
  const {category, sortBy} = useSelector(({filters}) => filters)

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category))
  }, [category, sortBy])

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickItem={(index) => onSelectCategory(index)}
          items={categoryNames}/>
        <SortPopup
          onClickSortType={onSelectSortType}
          activeSortType={sortBy}
          items={sortItems}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? pizzas?.map(pizza => (
            <PizzaBlock
              onClickAddPizza={(obj, size, type) => {
                let pObj = {
                  id: obj.pizza.id,
                  name: obj.pizza.name,
                  price: obj.pizza.price,
                  imageUrl: obj.pizza.imageUrl,
                  size,
                  type
                }
                dispatch(addPizzaToCart(pObj))
              }}
              pizza={pizza}
              key={pizza.id}/>))
          : Array(10).fill(0).map((el,index) => <PizzaLoadingBlock key={index}/>)}
      </div>
    </div>
  )
}