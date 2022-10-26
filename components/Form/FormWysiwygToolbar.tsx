import { WysiwygOptionsType } from "../../data";

type FormWysiwygToolbarType = {
  options?: WysiwygOptionsType[];
};

const FormWysiwygToolbar = (props: FormWysiwygToolbarType) => {
  const { options } = props;

  return (
    <div className="flex items-center gap-2">
      {options?.map((option) => (
        <div
          key={option.name}
          className="px-3 py-2 rounded-lg bg-[color:var(--theme-navy-darker)] cursor-pointer hover:opacity-80"
        >
          <img src={`./assets/images/toolbar/${option.icon}`} className="h-3" />
        </div>
      ))}
    </div>
  );
};

export default FormWysiwygToolbar;
