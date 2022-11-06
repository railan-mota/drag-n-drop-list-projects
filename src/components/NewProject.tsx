import React, { useRef } from "react";
import Box from "../UI/Box";
import { useDispatch } from "react-redux";
import { project } from "../models/store";
import { add } from "../store/projects-store";

const NewProject = () => {
    const dispatch = useDispatch();

    const titleInputRef = useRef<HTMLInputElement>(null);
    const descriptionInputRef = useRef<HTMLTextAreaElement>(null);
    const peopleInputRef = useRef<HTMLInputElement>(null);

    const submitFormHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newProject: project = {
            title: titleInputRef.current?.value!,
            description: descriptionInputRef.current?.value!,
            people: +peopleInputRef.current?.value!,
            isFinished: false,
            id: `${Math.floor(Math.random() * 1000).toFixed(3)}`,
        };

        dispatch(add(newProject));
        if (titleInputRef.current) {
            titleInputRef.current.value = "";
        }
        if (descriptionInputRef.current) {
            descriptionInputRef.current.value = "";
        }
        if (peopleInputRef.current) {
            peopleInputRef.current.value = "";
        }
    };

    return (
        <Box borderColor='border-slate-400'>
            <form
                className='max-w-lg mx-auto space-y-4 [&>div>label]:font-bold'
                onSubmit={submitFormHandler}
            >
                <div className='flex flex-col space-y-2'>
                    <label>Title</label>
                    <input
                        type='text'
                        required
                        minLength={5}
                        ref={titleInputRef}
                    />
                </div>
                <div className='flex flex-col space-y-2'>
                    <label>Description</label>
                    <textarea
                        rows={4}
                        required
                        minLength={10}
                        ref={descriptionInputRef}
                    />
                </div>
                <div className='flex flex-col space-y-2'>
                    <label>People</label>
                    <input
                        type='number'
                        min={1}
                        required
                        ref={peopleInputRef}
                    />
                </div>
                <button
                    type='submit'
                    className='uppercase inline-block w-fit mx-auto bg-pink-600 text-slate-50 py-3 px-5 rounded-sm'
                >
                    add Project
                </button>
            </form>
        </Box>
    );
};

export default NewProject;
