import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
    const history = useHistory();
    const domain = process.env.PAPER_VIT_AUTH0_DOMAIN;
    const clientId = process.env.PAPER_VIT_AUTH0_CLIENTID;

    const onRedirectCallBack = (appState) => {
        history.push(appState?.returnTo || window.location.pathname);
    }

    return(
        <Auth0Provider
            domain={ domain }
            clientId={ clientId }
            redirectUri={ window.location.origin }
            onRedirectCallback={ onRedirectCallBack }
        >
            { children }
        </Auth0Provider>
    );
}

export default Auth0ProviderWithHistory;