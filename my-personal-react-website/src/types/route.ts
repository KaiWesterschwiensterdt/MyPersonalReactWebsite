import { FC } from "react";

export interface RouteProps{
    path: string;
    component: FC;    
}

export interface LayoutRouteProps{
    layout: FC;
    routes: RouteProps[];
}