import React from "react";
import { Helmet } from 'react-helmet';
import descriptions from "../json/descriptions.json"

// The title, description, Open Graph tags and structured data live in
// public/index.html so crawlers that don't run JavaScript can read them.
// Helmet only keeps the title and description in sync here.
export const Headers = () => {

    return (
        <Helmet>
            <title>{descriptions.title}</title>
            <meta name="description" content={descriptions.desc} />
        </Helmet>
    );
};
