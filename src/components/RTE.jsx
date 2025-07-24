import React, { useRef } from "react";
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from "react-hook-form";


function RTE({
    control,
    name,
    label,
    defaultValue = "",
    setContent
}) {
    const editorRef = useRef(null);
    const log = () => {
        console.log(editorRef.current.getContent());
    };
    return (
        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1">{label}</label>}
            <Controller
                name="content"
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        apiKey="vlhv25divqxzkmm5sfvmlo9opqggr59pe1y8mbef1nbiq6tv"
                        onInit={(_evt, editor) => setContent(editor)}
                        initialValue={defaultValue}
                        onChange={onChange}
                        init={{
                            initialValue: defaultValue,
                            height: 500,
                            menubar: true,
                            plugins: [
                                "image",
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "image",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "code",
                                "help",
                                "wordcount",
                                "anchor",
                            ],
                            toolbar: "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                        onEditorChange={() => {
                            onChange(onChange)
                        }}
                    />
                )}
            />
        </div>
    );
}

export default RTE;