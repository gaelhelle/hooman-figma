import { useRef } from "react";
import FormActions from "./Form/FormActions";
import FormDateInput from "./Form/Input/FormDateInput";
import FormImageInput from "./Form/Input/FormImageInput";
import FormInput from "./Form/Input/FormInput";
import FormMinInput from "./Form/Input/FormMinInput";
import SelectCategories from "./Form/SelectCategories";

const ArticleForm = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const imageDescRef = useRef<HTMLInputElement>(null);
  const minRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLElement>(null);
  const bodyRef = useRef<HTMLElement>(null);
  const metadescriptionRef = useRef<HTMLInputElement>(null);
  const titleTagRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    console.log(bodyRef);

    const formData = {
      title: titleRef?.current?.value,
      image: imageRef?.current?.value,
      imageDesc: imageDescRef?.current?.value,
      min: minRef?.current?.value,
      date: dateRef?.current?.value,
      category: categoryRef?.current?.textContent,
      body: bodyRef?.current?.textContent,
      metadescription: metadescriptionRef?.current?.value,
      titleTag: titleTagRef?.current?.value,
    };

    console.log("Sending Form with :", formData);
  };

  return (
    <div className="p-10 flex flex-col h-full">
      <form className="h-full" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 h-full">
          <FormActions cancel="Discard" submit="Save" />
          <div>
            <div className="flex gap-4">
              <div className="flex-1">
                <FormInput
                  title="Title"
                  size="lg"
                  id="title"
                  value="Zhang v.USCIS: the profound impact of loans as a source of funds for investors investors"
                  multiLine
                  ref={titleRef}
                />
              </div>
              <div className="xl:w-[316px]">
                {/*  @ts-ignore decoupling ref here is bad practice, I just wanted to make the form works */}
                <FormImageInput ref={{ imageRef, imageDescRef }} />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="h-full flex flex-col pt-2">
              <div className="flex items-center justify-end gap-4 mb-3">
                <FormMinInput ref={minRef} />
                <FormDateInput ref={dateRef} />
                <SelectCategories ref={categoryRef} />
              </div>
              <div className="h-full mt-10 xl:mt-0">
                <FormInput
                  title="Body"
                  size="lg"
                  id="body"
                  wysiwyg
                  ref={bodyRef}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <FormInput
                title="Enter metadescription"
                titleInset
                id="metadescription"
                ref={metadescriptionRef}
              />
            </div>
            <div className="xl:w-[316px]">
              <FormInput
                title="Enter page title tag"
                titleInset
                id="page-title"
                ref={titleTagRef}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ArticleForm;
