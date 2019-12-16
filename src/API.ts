/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  title: string,
  content: string,
  price?: number | null,
  rating?: number | null,
};

export type ModeltodoConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  price?: ModelIntInput | null,
  rating?: ModelFloatInput | null,
  and?: Array< ModeltodoConditionInput | null > | null,
  or?: Array< ModeltodoConditionInput | null > | null,
  not?: ModeltodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateTodoInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  price?: number | null,
  rating?: number | null,
};

export type DeleteTodoInput = {
  id?: string | null,
};

export type ModeltodoFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  price?: ModelIntInput | null,
  rating?: ModelFloatInput | null,
  and?: Array< ModeltodoFilterInput | null > | null,
  or?: Array< ModeltodoFilterInput | null > | null,
  not?: ModeltodoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModeltodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo:  {
    __typename: "todo",
    id: string,
    title: string,
    content: string,
    price: number | null,
    rating: number | null,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModeltodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo:  {
    __typename: "todo",
    id: string,
    title: string,
    content: string,
    price: number | null,
    rating: number | null,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModeltodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo:  {
    __typename: "todo",
    id: string,
    title: string,
    content: string,
    price: number | null,
    rating: number | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo:  {
    __typename: "todo",
    id: string,
    title: string,
    content: string,
    price: number | null,
    rating: number | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModeltodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos:  {
    __typename: "ModeltodoConnection",
    items:  Array< {
      __typename: "todo",
      id: string,
      title: string,
      content: string,
      price: number | null,
      rating: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo:  {
    __typename: "todo",
    id: string,
    title: string,
    content: string,
    price: number | null,
    rating: number | null,
  } | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo:  {
    __typename: "todo",
    id: string,
    title: string,
    content: string,
    price: number | null,
    rating: number | null,
  } | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo:  {
    __typename: "todo",
    id: string,
    title: string,
    content: string,
    price: number | null,
    rating: number | null,
  } | null,
};
