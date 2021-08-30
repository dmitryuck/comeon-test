import React from "react";
import cn from "classnames";
import "./CategoryItem.scss";

export default function CategoryItem({ data, onCategorySelect, isCategorySelected }) {
  return (
    <a className={cn({ selected: isCategorySelected })} onClick={() => onCategorySelect(data.id)}>
      {data.name}
    </a>
  );
}
