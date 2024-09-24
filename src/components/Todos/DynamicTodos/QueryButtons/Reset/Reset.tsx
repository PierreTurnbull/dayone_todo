import { useQueryVariablesContext } from "../../../../../contexts/QueryVariables/useQueryVariablesContext";
import { TTodoQueryVariables } from "../../../../../types/todoQueryVariables/todoQueryVariables";
import { QueryButton } from "../../../../common/QueryButton/QueryButton";
import { initialQueryVariables } from "../../../../../contexts/QueryVariables/initialQueryVariables";

export const Reset = () => {
    const queryVariablesContext = useQueryVariablesContext();

    return (
        <QueryButton
            label="Réinitialiser"
            iconName="arrow-rotate-left"
            onClick={() => {
                queryVariablesContext.setQueryVariables(() => {
                    const newQueryVariables: TTodoQueryVariables = initialQueryVariables;

                    return newQueryVariables;
                });
            }}
        />
    );
};