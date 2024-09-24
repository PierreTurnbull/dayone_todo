import { useContext } from "react";
import { QueryVariablesContext } from "./QueryVariablesContext";

export const useQueryVariablesContext = () => {
    const queryVariablesContext = useContext(QueryVariablesContext);

    if (!queryVariablesContext) throw Error("Missing provider for queryVariablesContext.");

    return queryVariablesContext;
};