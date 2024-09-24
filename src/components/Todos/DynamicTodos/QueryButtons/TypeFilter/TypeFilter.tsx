import emotionStyled from "@emotion/styled";
import { useRef, useState } from "react";
import { useQueryVariablesContext } from "../../../../../contexts/QueryVariables/useQueryVariablesContext";
import { availableTypes } from "../../../../../data/availableTypes";
import { Loader } from "../../../../common/Loader/Loader";
import { Popover } from "../../../../common/Popover/Popover";
import { QueryButton } from "../../../../common/QueryButton/QueryButton";
import { TypeChoice } from "./TypeChoice/TypeChoice";

const Types = emotionStyled.ul`
`;

const TypesContent = emotionStyled.ul<{ isLoading: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 8px;

    ${({ isLoading }) => {
        if (isLoading) {
            return `
                opacity: 0.5;
                pointer-events: none;
            `;
        }
    }}
`;

type TTypeFilterProps = {
    isLoading: boolean;
}

export const TypeFilter = ({
    isLoading,
}: TTypeFilterProps) => {
    const queryVariablesContext = useQueryVariablesContext();

    const [typeFilterEl, setTypeFilterEl] = useState<HTMLDivElement | null>(null);
    const typeFilterRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <QueryButton
                label="Filtrer par type"
                ref={typeFilterRef}
                iconName={"filter"}
                isActive={queryVariablesContext.queryVariables.filters.types.length < availableTypes.length}
                onClick={() => setTypeFilterEl(typeFilterRef.current)}
            />
            <Popover
                anchorEl={typeFilterEl}
                onClose={() => setTypeFilterEl(null)}
            >
                <Types>
                    <TypesContent
                        isLoading={isLoading}
                    >
                        {
                            availableTypes.map((type) => {
                                return (
                                    <TypeChoice
                                        key={type}
                                        type={type}
                                        queryVariables={queryVariablesContext.queryVariables}
                                        setQueryVariables={queryVariablesContext.setQueryVariables}
                                    />
                                );
                            })
                        }
                    </TypesContent>
                    { isLoading ? <Loader /> : null }
                </Types>
            </Popover>
        </>
    );
};