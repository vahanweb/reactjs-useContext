import React, { useContext } from 'react';
import Task_01_example from './Task_01_example';
function RightSidebar(){
    const value = useContext(Task_01_example);
    console.log(value);
    return(
        <div className="RightSidebar">
            <div className="RightSidebar_container" style={{
                borderRadius: value.border_radius + "%",
            }}>
                <h1 style={{
                    color: value.title_color,
                }}>{value.title}</h1>
                <h2 style={{
                    color: value.description_color,
                }}>{value.description}</h2>
            </div>
        </div>
    )
}
export default RightSidebar;