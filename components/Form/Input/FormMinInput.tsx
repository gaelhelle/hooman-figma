const FormMinInput = () => {
  return (
    <div className="bg-[color:var(--theme-navy-darker)] rounded-lg font-light text-sm px-3 flex items-center justify-center cursor-pointer w-[70px] h-8 relative  focus-within:outline outline-white/20 ">
      <input
        className="bg-transparent w-full outline-none pr-6"
        type="text"
        pattern="\d*"
        maxLength={2}
      />
      <label className=" text-lg block absolute top-0 text-[color:var(--theme-navy-dark)] right-2">
        min
      </label>
    </div>
  );
};

export default FormMinInput;
