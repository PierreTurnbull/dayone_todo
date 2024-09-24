import { gql } from "../__generated__";

export const GET_TODO_LIST = gql(`
    query GetTodoList($orderBy: Ordering, $filters: TodoFiltersInput) {
        getTodoList(orderBy: $orderBy, filters: $filters) {
            id
            createdAt
            type
            isDone
            text
            title
        }
    }
`);