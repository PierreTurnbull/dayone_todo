import emotionStyled from "@emotion/styled";

const Root = emotionStyled.h1`
    font-size: 24px;
`;

type TPageTitleProps = {
    title: string;
}

export const PageTitle = ({
    title,
}: TPageTitleProps) => {
    return (
        <Root>{title}</Root>
    );
};