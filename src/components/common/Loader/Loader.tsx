import { keyframes } from "@emotion/react";
import emotionStyled from "@emotion/styled";

const spinningAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Root = emotionStyled.div`
    height: 12px;
    width: 12px;
    border: 3px solid #DDD;
    border-top: 3px solid #444;
    border-radius: 12px;
    animation: ${spinningAnimation} 1s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

type TLoaderProps = {
    className?: string;
}

export const Loader = ({
    className,
}: TLoaderProps) => {
    return (
        <Root className={className} />
    );
};