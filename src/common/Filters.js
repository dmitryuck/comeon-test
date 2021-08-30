import { deepCopy } from "./Utils";

export const defaultFilters = [
  { filterBy: "name", value: "", func: filterByName },
  { filterBy: "categoryIds", value: 0, func: filterByCategoryId },
];

export const applyFilters = (items, filters) => {
  let filteredItems = deepCopy(items);

  filters.forEach((filter) => {
    const targetFilter = defaultFilters.find(
      (defaultFilter) => defaultFilter.filterBy === filter.filterBy
    );

    if (!targetFilter) {
      throw new Error("No filter found with current filterBy: " + filter.filterBy);
    }

    filteredItems = targetFilter.func(filteredItems, filter.filterBy, filter.value);
  });

  return filteredItems;
};

export const concatFilters = (filters, newFilter) => {
  const filtersCopy = deepCopy(filters);

  const targetFilter = filtersCopy.find((filter) => filter.filterBy === newFilter.filterBy);

  if (targetFilter) {
    targetFilter.value = newFilter.value;
  } else {
    filtersCopy.push(newFilter);
  }

  return filtersCopy;
};

function filterByName(items, filterBy, value) {
  let itemsFilteredByName = deepCopy(items);

  if (value) {
    itemsFilteredByName = items.filter((item) => item[filterBy].includes(value));
  }

  return itemsFilteredByName;
}

function filterByCategoryId(items, filterBy, value) {
  return items.filter((item) => item[filterBy].includes(value));
}
