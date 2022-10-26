import { Iconly } from "react-iconly";
import FormActions from "./Form/FormActions";
import FormDateInput from "./Form/Input/FormDateInput";
import FormImageInput from "./Form/Input/FormImageInput";
import FormInput from "./Form/Input/FormInput";
import FormMinInput from "./Form/Input/FormMinInput";
import SelectCategories from "./Form/SelectCategories";

type ArticleFormType = {
  id: string;
};

const ArticleForm = (props: ArticleFormType) => {
  const { id } = props;

  return (
    <div className="p-10 flex flex-col h-full">
      <form className="h-full">
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
                />
              </div>
              <div className="xl:w-[316px]">
                <FormImageInput />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="h-full flex flex-col pt-2">
              <div className="flex items-center justify-end gap-4 mb-3">
                <FormMinInput />
                <FormDateInput />
                <SelectCategories />
              </div>
              <div className="h-full mt-10 xl:mt-0">
                <FormInput title="Body" size="lg" id="body" wysiwyg />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <FormInput
                title="Enter metadescription"
                titleInset
                id="metadescription"
              />
            </div>
            <div className="xl:w-[316px]">
              <FormInput
                title="Enter page title tag"
                titleInset
                id="page-title"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ArticleForm;
