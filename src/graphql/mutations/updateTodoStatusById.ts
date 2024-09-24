import { gql } from "../__generated__";

export const UPDATE_TODO_STATUS_BY_ID = gql(`
    mutation UpdateTodoStatusById($id: ID!, $isDone: Boolean!) {
        updateTodoStatusById(id: $id, isDone: $isDone) {
            id
            isDone
        }
    }
`);