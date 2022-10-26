import React, { forwardRef, useCallback, useState } from "react";
import { wysiwygOptions } from "../../../data";
import FormWysiwyg from "../FormWysiwyg";
import FormWysiwygToolbar from "../FormWysiwygToolbar";

type FormInputType = {
  id: string;
  title?: string;
  size?: "lg" | "md" | "sm";
  titleInset?: boolean;
  value?: string;
  multiLine?: boolean;
  wysiwyg?: boolean;
};

// const FormInput = (props: FormInputType) => {
const FormInput = forwardRef((props: FormInputType, ref) => {
  const {
    title,
    titleInset,
    size = "md",
    id,
    value = "",
    multiLine,
    wysiwyg,
  } = props;

  const [inputValud, setInputValue] = useState(value);

  let sizeClass = "text-md";

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  if (size === "lg") {
    sizeClass = "text-xl";
  }

  return (
    <div className="relative flex flex-col h-full">
      {title && !titleInset && (
        <div className="flex items-center gap-4 px-6 mb-1 absolute -top-10">
          <label
            className="text-[color:var(--theme-navy-darker)] text-lg block"
            htmlFor={id}
          >
            {title}
          </label>
          {wysiwyg && <FormWysiwygToolbar options={wysiwygOptions} />}
        </div>
      )}
      <div className="rounded-theme-main bg-[color:var(--theme-navy-darker)] focus-within:outline outline-white/20 relative flex-1">
        {titleInset && size !== "sm" && (
          <label
            className="font-light text-[color:var(--theme-navy-dark)] px-6 pt-2 absolute pointer-events-none"
            htmlFor={id}
          >
            {title}
          </label>
        )}

        {wysiwyg ? (
          <FormWysiwyg ref={ref} />
        ) : multiLine ? (
          <textarea
            // @ts-ignore
            ref={ref}
            className={`bg-transparent w-full px-6 py-6 outline-none resize-none h-[107px] ${sizeClass}`}
            value={inputValud}
            rows={1}
            max-rows={3}
            // @ts-ignore
            onChange={handleChange}
          />
        ) : (
          <input
            // @ts-ignore
            ref={ref}
            className={`bg-transparent w-full outline-none px-6 font-light placeholder-[color:var(--theme-navy-dark)] ${sizeClass} ${
              titleInset && size !== "sm" ? "pt-8" : ""
            } ${size === "sm" ? "py-1" : "py-4"}`}
            id={id}
            placeholder={size === "sm" ? title : ""}
            value={inputValud}
            onChange={handleChange}
          />
        )}
      </div>
    </div>
  );
});

export default FormInput;
