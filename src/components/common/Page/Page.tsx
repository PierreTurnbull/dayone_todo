import emotionStyled from "@emotion/styled";
import { PageTitle } from "../PageTitle/PageTitle";

const Root = emotionStyled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 20px 0;
`;

const Content = emotionStyled.div`
    display: flex;
    flex-direction: column;
`;

type TPageProps = {
    children: React.ReactNode;
    title: string;
}

export const Page = ({
    children,
    title,
}: TPageProps) => {
    return (
        <Root>
            <PageTitle title={title} />
            <Content>
                {children}
            </Content>
        </Root>
    );
};