import { applyFilters, defaultFilters, concatFilters } from "./Filters";

const testItems = [
  { name: "Hello", categoryIds: [0] },
  { name: "Word", categoryIds: [0, 1] },
];

test("default filter", () => {
  const filteredItems = applyFilters(testItems, defaultFilters);

  expect(filteredItems.length).toEqual(2);
});

test("filter by name (found)", () => {
  const searchName = "Hello";

  const filteredItems = applyFilters(
    testItems,
    concatFilters(defaultFilters, { filterBy: "name", value: searchName })
  );

  expect(filteredItems.length).toEqual(1);
});

test("filter by name (not found)", () => {
  const searchName = "Bye";

  const filteredItems = applyFilters(
    testItems,
    concatFilters(defaultFilters, { filterBy: "name", value: searchName })
  );

  expect(filteredItems.length).toEqual(0);
});

test("filter by categoryId (found both)", () => {
  const searchCategoryId = 0;

  const filteredItems = applyFilters(
    testItems,
    concatFilters(defaultFilters, { filterBy: "categoryIds", value: searchCategoryId })
  );

  expect(filteredItems.length).toEqual(2);
});

test("filter by categoryId (found one)", () => {
  const searchCategoryId = 1;

  const filteredItems = applyFilters(
    testItems,
    concatFilters(defaultFilters, { filterBy: "categoryIds", value: searchCategoryId })
  );

  expect(filteredItems.length).toEqual(1);
});
