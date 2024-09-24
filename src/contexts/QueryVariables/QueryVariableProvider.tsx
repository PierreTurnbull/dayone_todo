import { useState } from "react";
import { initialQueryVariables } from "./initialQueryVariables";
import { QueryVariablesContext, TQueryVariablesContextState } from "./QueryVariablesContext";
import { TTodoQueryVariables } from "../../types/todoQueryVariables/todoQueryVariables";
import { getGqlQueryVariables } from "./getGqlQueryVariables";

type TQueryVariablesProviderProps = {
    children: React.ReactNode;
}

export const QueryVariableProvider = ({
    children,
}: TQueryVariablesProviderProps) => {
    const [queryVariables, setQueryVariables] = useState<TTodoQueryVariables>(initialQueryVariables);

    const contextState: TQueryVariablesContextState = {
        queryVariables: queryVariables,
        setQueryVariables: setQueryVariables,
        gqlQueryVariables: getGqlQueryVariables(queryVariables),
    };

    return (
        <QueryVariablesContext.Provider value={contextState}>
            {children}
        </QueryVariablesContext.Provider>
    );
};