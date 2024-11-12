import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "../layouts/layouts";
import Portafolio from "../components/portafolio";

const rutas = [
    {
        url: '/',
        component: <Portafolio />
    },
];


export default function RoutesDash() {

    return (
        <Routes>
                <Route element={<Layout />}>
                    {rutas.map((ruta, index) => (
                    <Route key={index} path={ruta.url} element={ruta.component} />
                ))}
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
        
        </Routes>
    );
}
