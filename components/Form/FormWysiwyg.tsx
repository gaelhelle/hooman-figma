import { useCallback, useEffect, useRef, useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

const PARAGRAPH_STYLES = ["h2", "h3", "h4"];
const CHARACTER_STYLES = ["bold", "italic", "underline", "code"];

const FormWysiwyg = () => {
  const divRef = useRef(null);
  const [editorHeight, setEditorHeight] = useState();
  const [editor] = useState(() => withReact(createEditor()));

  const renderElement = useCallback(({ attributes, children, element }) => {
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
  }, []);

  useEffect(() => {
    handleResize();

    function handleResize() {
      setEditorHeight(divRef?.current?.offsetHeight - 20);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-full" ref={divRef}>
      <Slate editor={editor} value={initialValue}>
        <Editable
          renderElement={renderElement}
          style={{
            height: editorHeight,
          }}
          className="p-4 !absolute top-0 left-0 right-0 overflow-hidden font-light"
        />
      </Slate>
    </div>
  );
};

export default FormWysiwyg;