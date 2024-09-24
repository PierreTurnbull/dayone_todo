import { createContext } from "react";
import { TTodoQueryVariables } from "../../types/todoQueryVariables/todoQueryVariables";
import { GetTodoListQueryVariables } from "../../graphql/__generated__/graphql";

export type TQueryVariablesContextState = {
    queryVariables: TTodoQueryVariables;
    setQueryVariables: React.Dispatch<React.SetStateAction<TTodoQueryVariables>>;
    gqlQueryVariables: GetTodoListQueryVariables;
};

export const QueryVariablesContext = createContext<TQueryVariablesContextState|null>(null);