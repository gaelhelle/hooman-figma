import { WysiwygOptionsType } from "../../data";
import { useSlate } from "slate-react";
import { toggleBlock, toggleMark } from "../../utils/SlateEditorUtils";

type FormWysiwygToolbarType = {
  options?: WysiwygOptionsType[];
};

const FormWysiwygToolbar = (props: FormWysiwygToolbarType) => {
  const { options } = props;

  return (
    <div className="flex items-center gap-2">
      {options?.map((option) => (
        <ToolbarButton
          key={option.name}
          type={option.type}
          icon={option.icon}
          format={option.name}
        />
      ))}
    </div>
  );
};

type ToolbarButtonType = {
  type: "block" | "mark";
  format: string;
  icon: string;
};

const ToolbarButton = (props: ToolbarButtonType) => {
  const { icon, format, type } = props;
  const editor = useSlate();

  const handleClick = () => {
    if (type === "block") {
      toggleBlock(editor, format);
    } else {
      toggleMark(editor, format);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="px-3 py-2 rounded-lg bg-[color:var(--theme-navy-darker)] cursor-pointer hover:opacity-80"
    >
      <img src={`./assets/images/toolbar/${icon}`} className="h-3" />
    </div>
  );
};

export default FormWysiwygToolbar;
