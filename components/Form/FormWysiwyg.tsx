import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { wysiwygOptions } from "../../data";
import { SlateElement, SlateLeaf } from "../../utils/SlateEditorUtils";
import FormWysiwygToolbar from "./FormWysiwygToolbar";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

const FormWysiwyg = forwardRef((props, ref) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [editorHeight, setEditorHeight] = useState<number>();
  const [editorValue, setEditorValue] = useState("");
  const [editor] = useState(() => withReact(createEditor()));

  const handleChange = (e: any) => {
    const content = JSON.stringify(e);
    setEditorValue(content);
  };

  const renderElement = useCallback(
    (props: any) => <SlateElement {...props} />,
    []
  );
  const renderLeaf = useCallback((props: any) => <SlateLeaf {...props} />, []);

  useEffect(() => {
    handleResize();

    function handleResize() {
      if (!divRef.current) return;
      setEditorHeight(divRef.current.offsetHeight - 20);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-full" ref={divRef}>
      <Slate editor={editor} value={initialValue} onChange={handleChange}>
        <div className="absolute left-20 -top-10">
          <FormWysiwygToolbar options={wysiwygOptions} />
        </div>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          style={{
            height: editorHeight,
          }}
          className="p-4 !absolute top-0 left-0 right-0 overflow-hidden font-light overflow-x-hidden overflow-y-scroll show-scrollbar"
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
