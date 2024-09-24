import { gql } from "../__generated__";

export const GET_TODO_BY_ID = gql(`
    query GetTodoById($id: ID!) {
        getTodoById(id: $id) {
            id
            createdAt
            type
            isDone
            text
            title
        }
    }
`);