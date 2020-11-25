const getTodoState = store => store.todos

export const getTodoList = store =>
  getTodoState(store) ? getTodoState(store).allIds : []

export const getTodoById = (store, id) =>
  getTodoState(store) ? { ...getTodoState(store).byIds[id], id } : {}

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id))

export const getCompanies = store =>
  getTodoState(store) ? getTodoState(store).companies : []
