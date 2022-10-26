import { Iconly } from "react-iconly";

type FormActionsType = {
  submit?: string;
  cancel?: string;
};

const FormActions = (props: FormActionsType) => {
  const { submit, cancel } = props;
  return (
    <div className="flex items-center justify-end gap-4">
      <div className="hover:opacity-80">
        <Iconly name="Hide" />
      </div>
      <button className="hover:opacity-80">{cancel}</button>
      <button className="cursor-pointer bg-[color:var(--theme-primary)] text-[color:var(--theme-navy-dark)] rounded-lg px-6 py-2 hover:opacity-80">
        {submit}
      </button>
    </div>
  );
};

export default FormActions;
