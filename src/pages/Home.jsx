import React from "react";

import {Categories, SortPopup} from "../Components";
import PizzaBlock from "../Components/PizzaBlock";

export default function Home({pizzas}) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={(item) => console.log(item)}
          items={[
            'Все',
            'Мясные',
            'Вегетерианские',
            'Гриль',
            'Острые',
            'Закрытые',
          ]}/>
        <SortPopup items={
          ['популяонсти', 'цене', 'алфавиту']
        }/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas?.map(pizza => (
          <PizzaBlock
            pizza={pizza}
            key={pizza.id} />
        ))}
      </div>
    </div>
  )
}