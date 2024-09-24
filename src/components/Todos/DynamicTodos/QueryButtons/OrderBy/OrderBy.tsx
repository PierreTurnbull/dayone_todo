import { useQueryVariablesContext } from "../../../../../contexts/QueryVariables/useQueryVariablesContext";
import { Ordering } from "../../../../../graphql/__generated__/graphql";
import { QueryButton } from "../../../../common/QueryButton/QueryButton";

export const OrderBy = () => {
    const queryVariablesContext = useQueryVariablesContext();

    let sortIcon: string;

    if (queryVariablesContext.queryVariables.orderBy === null) sortIcon = "sort";
    else if (queryVariablesContext.queryVariables.orderBy === Ordering.DateAsc) sortIcon = "sort-down";
    else sortIcon = "sort-up";

    return (
        <QueryButton
            label="Trier par date"
            iconName={sortIcon}
            isActive={Boolean(queryVariablesContext.queryVariables.orderBy)}
            onClick={() => {
                queryVariablesContext.setQueryVariables(prev => {
                    const newQueryVariables = structuredClone(prev);

                    if (queryVariablesContext.queryVariables.orderBy === null) {
                        newQueryVariables.orderBy = Ordering.DateAsc;
                    } else if (queryVariablesContext.queryVariables.orderBy === Ordering.DateAsc) {
                        newQueryVariables.orderBy = Ordering.DateDesc;
                    } else {
                        newQueryVariables.orderBy = null;
                    }

                    return newQueryVariables;
                });
            }}
        />
    );
};