import { LayoutRouteProps } from "react-router-dom";
import Layout from "../components/common/layout";
import { lazy } from "react";

const routes : LayoutRouteProps[] = [
    {
        layout: Layout,
        routes: [
            {
                path: "/",
                component: lazy(()=> import("../pages/Home"))
            },
            {
                path: "/about",
                component: lazy(()=> import("../pages/About"))
            },
        ]

    }
];

export default routes;