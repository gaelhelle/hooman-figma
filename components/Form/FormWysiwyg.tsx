import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

const FormWysiwyg = forwardRef((props, ref) => {
  const divRef = useRef(null);
  const [editorHeight, setEditorHeight] = useState<number>();
  const [editorValue, setEditorValue] = useState("");
  const [editor] = useState(() => withReact(createEditor()));

  const handleChange = (e: any) => {
    const content = JSON.stringify(e);
    setEditorValue(content);
  };

  const renderElement = useCallback(
    ({ attributes, children, element }: any) => {
      switch (element.type) {
        case "quote":
          return <blockquote {...attributes}>{children}</blockquote>;
        case "link":
          return (
            <a {...attributes} href={element.url}>
              {children}
            </a>
          );
        default:
          return <p {...attributes}>{children}</p>;
      }
    },
    []
  );

  useEffect(() => {
    handleResize();

    function handleResize() {
      /*  @ts-ignore */
      setEditorHeight(divRef?.current?.offsetHeight - 20);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-full" ref={divRef}>
      <Slate editor={editor} value={initialValue} onChange={handleChange}>
        <Editable
          renderElement={renderElement}
          style={{
            height: editorHeight,
          }}
          className="p-4 !absolute top-0 left-0 right-0 overflow-hidden font-light"
        />
      </Slate>
      {/* @ts-ignore */}
      <div ref={ref} className="hidden">
        {editorValue}
      </div>
    </div>
  );
});

export default FormWysiwyg;
