import { useSelector, useDispatch } from "react-redux";
import { notFinished } from "../store/projects-store";
import { RootState } from "../store/projects-store";
import { useDrop } from "react-dnd";
import Box from "../UI/Box";
import Project from "./Project";

const ActiveProjects = () => {
    const projects = useSelector((state: RootState) => state.projects.projects);
    const dispatch = useDispatch();
    const notFinishedProjects = projects.filter(
        (project) => project.isFinished === false
    );

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "project",
        drop: (item: { id: string }) => onDropHandler(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const onDropHandler = (id: string) => {
        dispatch(notFinished(id));
    };

    return (
        <div ref={drop}>
            <Box
                textColor='text-zinc-50'
                bgColor='bg-pink-600'
                header='Active Projects'
                borderColor='border-pink-600'
            >
                {notFinishedProjects.length === 0 && (
                    <h1>All Projects Finished</h1>
                )}
                {notFinishedProjects.length > 0 &&
                    notFinishedProjects.map((project) => {
                        return <Project project={project} key={project.id} />;
                    })}
            </Box>
        </div>
    );
};

export default ActiveProjects;
