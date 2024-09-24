import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import emotionStyled from "@emotion/styled";
import { QueryVariableProvider } from "./contexts/QueryVariables/QueryVariableProvider";

const Root = emotionStyled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const apolloClient = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
});
  
function App() {
    return (
        <Root>
            <ApolloProvider client={apolloClient}>
                <QueryVariableProvider>
                    <RouterProvider router={router} />
                </QueryVariableProvider>
            </ApolloProvider>
        </Root>
    );
}

export default App;
