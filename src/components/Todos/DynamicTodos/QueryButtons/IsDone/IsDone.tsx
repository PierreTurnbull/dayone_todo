import { useQueryVariablesContext } from "../../../../../contexts/QueryVariables/useQueryVariablesContext";
import { QueryButton } from "../../../../common/QueryButton/QueryButton";

export const IsDone = () => {
    const queryVariablesContext = useQueryVariablesContext();

    let isActive: boolean;
    
    if (
        !queryVariablesContext.queryVariables.filters ||
        queryVariablesContext.queryVariables.filters.isDone === null ||
        queryVariablesContext.queryVariables.filters.isDone === undefined
    ) isActive = true;
    else isActive = queryVariablesContext.queryVariables.filters.isDone;

    return (
        <QueryButton
            label="Que les todos faits"
            iconName="check"
            isActive={isActive}
            onClick={() => {
                queryVariablesContext.setQueryVariables(prev => {
                    const newQueryVariables = structuredClone(prev);

                    newQueryVariables.filters.isDone = !newQueryVariables.filters.isDone;

                    return newQueryVariables;
                });
            }}
        />
    );
};