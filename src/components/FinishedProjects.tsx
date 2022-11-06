import { useSelector, useDispatch } from "react-redux";
import { finished } from "../store/projects-store";
import { RootState } from "../store/projects-store";
import { useDrop } from "react-dnd";
import Project from "./Project";
import Box from "../UI/Box";

const FinishedProjects = () => {
    const projects = useSelector((state: RootState) => state.projects.projects);
    const dispatch = useDispatch();

    const projectsFinished = projects.filter(
        (projects) => projects.isFinished === true
    );

    const [, drop] = useDrop(() => ({
        accept: "project",
        drop: (item: { id: string }) => onDropHandler(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const onDropHandler = (id: string) => {
        dispatch(finished(id));
    };

    return (
        <div ref={drop}>
            <Box
                textColor='text-zinc-50'
                bgColor='bg-blue-600'
                header='Finished Projects'
                borderColor='border-blue-600'
            >
                {projectsFinished.length === 0 && (
                    <h1 className='text-center'>No Projects finished</h1>
                )}
                {projectsFinished.length > 0 &&
                    projectsFinished.map((project) => {
                        return <Project project={project} key={project.id} />;
                    })}
            </Box>
        </div>
    );
};

export default FinishedProjects;
