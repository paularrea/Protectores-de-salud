import React from 'react'
import {container, box, flex_container} from "./info.module.scss"
import dashboards_community_workers from "../Charts/graphData";

const Infobox = () => {

    const num_of_active_community_workers = dashboards_community_workers.num_of_active_community_workers;
    const num_of_interventions = dashboards_community_workers.num_of_interventions;
    const num_of_calls = dashboards_community_workers.num_of_calls;
    const num_of_visits = dashboards_community_workers.num_of_visits;
    

    return (
        <div className={container}>
            <div className={flex_container}>
            <div className={box}><p>PDSs activos</p><h2>{num_of_active_community_workers}</h2></div>    
            <div className={box}><p>Intervenciones realizadas</p><h2>{num_of_interventions}</h2></div>    
            </div>
            <div className={flex_container}>
            <div className={box}><p>Número de llamadas realizadas</p><h2>{num_of_calls}</h2></div>    
            <div className={box}><p>Número de visitas realizadas</p><h2>{num_of_visits}</h2></div>    
            </div>
        </div>
    )
}

export default Infobox
