import React from "react";
import { project } from "../models/store";
import { useDrag } from "react-dnd";

const Project: React.FC<{ project: project }> = ({ project }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "project",
        item: { id: project.id, isFinshed: false },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
            className={`bg-slate-50 shadow-lg p-4 rounded-md space-y-4 hover:cursor-pointer ${
                isDragging ? "border-2 border-gray-500" : ""
            }`}
            ref={drag}
        >
            <h1 className='text-center text-lg'>{project.title}</h1>
            <p className='text-gray-600 font-bold'>{`${project.people} person assigned`}</p>
            <p>{project.description}</p>
        </div>
    );
};

export default Project;
