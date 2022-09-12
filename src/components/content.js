import React, { useState } from 'react';
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Task_01_example from './Task_01_example';

function Content() {
    let [title, setTitle] = useState("RightSidebar");
    let [description, setDescription] = useState("description");
    let [border_radius, setBorder_radius] = useState("");
    let [title_color, setTitle_color] = useState("");
    let [description_color, setDescription_color] = useState("");



    return (
        <div className="content">
            <Task_01_example.Provider value={{
                title: title,
                description: description,
                border_radius: border_radius,
                title_color: title_color,
                description_color: description_color
            }}>
                <LeftSidebar 
                    onTitle={(data1)=>{
                        setTitle(data1);
                    }} 
                    onDescription={(data2)=>{
                        setDescription(data2);
                    }}
                    onBorder_radius={(data3)=>{
                        setBorder_radius(data3);
                    }}
                    onTitle_color={(data4)=>{
                        setTitle_color(data4);
                    }}
                    onDescription_color={(data5)=>{
                        setDescription_color(data5);
                    }} />
                <RightSidebar />
            </Task_01_example.Provider>
        </div>
    )
}
export default Content;