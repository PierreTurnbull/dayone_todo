import { useQueryVariablesContext } from "../../../../../contexts/QueryVariables/useQueryVariablesContext";
import { QueryButton } from "../../../../common/QueryButton/QueryButton";

export const OnlyBusiness = () => {
    const queryVariablesContext = useQueryVariablesContext();

    const isActive = queryVariablesContext.queryVariables.filters.usesPriorityTypes;

    return (
        <QueryButton
            label={"Que les todos \"Marketing\" et \"Communication\""}
            iconName="exclamation"
            isActive={isActive}
            onClick={() => {
                queryVariablesContext.setQueryVariables(prev => {
                    const newQueryVariables = structuredClone(prev);

                    newQueryVariables.filters.usesPriorityTypes = !newQueryVariables.filters.usesPriorityTypes;

                    return newQueryVariables;
                });
            }}
        />
    );
};