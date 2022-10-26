const FormDateInput = () => {
  return (
    <div className="flex items-center gap-2">
      <label className="text-[color:var(--theme-navy-darker)] text-lg block">
        Date
      </label>
      <input
        readOnly
        value="03.25.20"
        className="bg-[color:var(--theme-navy-darker)] rounded-lg font-light text-sm px-4 py-2 cursor-pointer w-[86px] h-8"
      />
    </div>
  );
};

export default FormDateInput;
