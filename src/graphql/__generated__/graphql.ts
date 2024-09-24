/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Mutation = {
  __typename?: 'Mutation';
  updateTodoStatusById: Todo;
};


export type MutationUpdateTodoStatusByIdArgs = {
  id: Scalars['ID']['input'];
  isDone: Scalars['Boolean']['input'];
};

export enum Ordering {
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC'
}

export type Query = {
  __typename?: 'Query';
  getTodoById: Todo;
  getTodoList: Array<Todo>;
};


export type QueryGetTodoByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetTodoListArgs = {
  filters?: InputMaybe<TodoFiltersInput>;
  orderBy?: InputMaybe<Ordering>;
};

export type Todo = {
  __typename?: 'Todo';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isDone: Scalars['Boolean']['output'];
  text?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: TodoTypes;
};

export type TodoFiltersInput = {
  isDone?: InputMaybe<Scalars['Boolean']['input']>;
  types?: InputMaybe<Array<TodoTypes>>;
};

export enum TodoTypes {
  Communication = 'Communication',
  Marketing = 'Marketing',
  Rh = 'RH',
  Tech = 'Tech'
}

export type GetTodoByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetTodoByIdQuery = { __typename?: 'Query', getTodoById: { __typename?: 'Todo', id: string, createdAt: any, type: TodoTypes, isDone: boolean, text?: string | null, title: string } };

export type GetTodoListQueryVariables = Exact<{
  orderBy?: InputMaybe<Ordering>;
  filters?: InputMaybe<TodoFiltersInput>;
}>;


export type GetTodoListQuery = { __typename?: 'Query', getTodoList: Array<{ __typename?: 'Todo', id: string, createdAt: any, type: TodoTypes, isDone: boolean, text?: string | null, title: string }> };

export type UpdateTodoStatusByIdMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  isDone: Scalars['Boolean']['input'];
}>;


export type UpdateTodoStatusByIdMutation = { __typename?: 'Mutation', updateTodoStatusById: { __typename?: 'Todo', id: string, isDone: boolean } };


export const GetTodoByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTodoById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTodoById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"isDone"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetTodoByIdQuery, GetTodoByIdQueryVariables>;
export const GetTodoListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTodoList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Ordering"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TodoFiltersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTodoList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"isDone"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetTodoListQuery, GetTodoListQueryVariables>;
export const UpdateTodoStatusByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTodoStatusById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isDone"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTodoStatusById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"isDone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isDone"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isDone"}}]}}]}}]} as unknown as DocumentNode<UpdateTodoStatusByIdMutation, UpdateTodoStatusByIdMutationVariables>;