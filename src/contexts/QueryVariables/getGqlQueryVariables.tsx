import { GetTodoListQueryVariables, TodoFiltersInput, TodoTypes } from "../../graphql/__generated__/graphql";
import { TTodoQueryVariables } from "../../types/todoQueryVariables/todoQueryVariables";

const getFinalTypes = (queryVariables: TTodoQueryVariables) => {
    let finalTypes: TodoTypes[];

    if (queryVariables.filters.usesPriorityTypes) {
        finalTypes = [
            TodoTypes.Communication,
            TodoTypes.Marketing,
        ];
    } else {
        finalTypes = queryVariables.filters.types;
    }

    return finalTypes;
};

const getFinalIsDone = (queryVariables: TTodoQueryVariables) => {
    let finalIsDone: TodoFiltersInput["isDone"] = undefined;

    if (queryVariables.filters.isDone === true) {
        finalIsDone = true;
    }

    return finalIsDone;
};

/**
 * Map client side query variables into graphql query variables.
 * @param queryVariables client side query variables
 * @returns graphql query variables
 */
export const getGqlQueryVariables = (queryVariables: TTodoQueryVariables) => {
    const finalTypes = getFinalTypes(queryVariables);
    const finalIsDone = getFinalIsDone(queryVariables);

    const gqlQueryVariables: GetTodoListQueryVariables = {
        orderBy: queryVariables.orderBy,
        filters: {
            types: finalTypes,
            isDone: finalIsDone,
        },
    };

    return gqlQueryVariables;
};