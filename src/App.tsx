import NewProject from "./components/NewProject";
import DragDrop from "./components/DragDrop";
import { Provider } from "react-redux";
import { store } from "./store/projects-store";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <Provider store={store}>
                <div className='container p-4 space-y-6 mx-auto'>
                    <NewProject />
                    <DragDrop />
                </div>
            </Provider>
        </DndProvider>
    );
}

export default App;
