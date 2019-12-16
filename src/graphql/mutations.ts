// tslint:disable
// this is an auto generated file. This will be overwritten

export const createTodo = `mutation CreateTodo(
  $input: CreateTodoInput!
  $condition: ModeltodoConditionInput
) {
  createTodo(input: $input, condition: $condition) {
    id
    title
    content
    price
    rating
  }
}
`;
export const updateTodo = `mutation UpdateTodo(
  $input: UpdateTodoInput!
  $condition: ModeltodoConditionInput
) {
  updateTodo(input: $input, condition: $condition) {
    id
    title
    content
    price
    rating
  }
}
`;
export const deleteTodo = `mutation DeleteTodo(
  $input: DeleteTodoInput!
  $condition: ModeltodoConditionInput
) {
  deleteTodo(input: $input, condition: $condition) {
    id
    title
    content
    price
    rating
  }
}
`;
