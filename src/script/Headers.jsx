import React from "react";
import { Interweave } from "interweave";
import descriptions from "../json/descriptions.json"

export const Headers = () => {

    return (
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:title" content="Wolf Reefs" />
            <meta property="og:image" content="https://r2.wolfreefs.com/IMG_1925.jpg" />
            <meta property="og:description" content={descriptions.desc} />
            <meta name="description" content={descriptions.desc} />
            <script>
                <Interweave content={JSON.stringify(descriptions.content)}/>
            </script>
        </head>
    );
};