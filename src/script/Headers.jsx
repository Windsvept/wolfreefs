import React from "react";
import { Helmet } from 'react-helmet';
import descriptions from "../json/descriptions.json"

export const Headers = () => {

    return (
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:title" content="Wolf Reefs" />
            <meta property="og:image" content="https://r2.wolfreefs.com/IMG_1925.jpg" />
            <meta property="og:description" content={descriptions.desc} />
            <meta name="description" content={descriptions.desc} />
            <script type="application/ld+json">
                {JSON.stringify(descriptions.content)}
            </script>
        </Helmet>
    );
};