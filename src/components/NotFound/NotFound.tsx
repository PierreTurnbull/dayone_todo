import { Link } from "react-router-dom";
import { Page } from "../common/Page/Page";

export const NotFound = () => {
    return (
        <Page title="Page non trouvée">
            La page que vous recherchez n'existe pas. Retour à la page des todos : <Link to="/todos">/todos</Link>
        </Page>
    );
};