import { GetTodoListQueryVariables, Ordering, Scalars, TodoTypes } from "../../graphql/__generated__/graphql";

export type TTodoPriorityTypes = TodoTypes.Communication | TodoTypes.Marketing;

export type TTodoQueryVariables = {
    orderBy: Ordering | null
    filters: GetTodoListQueryVariables["filters"] & {
        isDone: Scalars["Boolean"]["input"]
        types: TodoTypes[]
        usesPriorityTypes: boolean
    }
}