import emotionStyled from "@emotion/styled";
import { IsDone } from "./IsDone/IsDone";
import { OnlyBusiness } from "./OnlyBusiness/OnlyBusiness";
import { OrderBy } from "./OrderBy/OrderBy";
import { Reset } from "./Reset/Reset";
import { TypeFilter } from "./TypeFilter/TypeFilter";

const Root = emotionStyled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    width: 100%;
`;

type TFiltersProps = {
    isLoading: boolean
}

export const QueryButtons = ({
    isLoading,
}: TFiltersProps) => {
    return (
        <Root>
            <TypeFilter isLoading={isLoading} />
            <OrderBy />
            <IsDone />
            <OnlyBusiness />
            <Reset />
        </Root>
    );
};