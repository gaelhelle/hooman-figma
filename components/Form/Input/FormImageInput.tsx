import { useEffect, useState } from "react";
import { Iconly } from "react-iconly";
import FormInput from "./FormInput";

const FormImageInput = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (!selectedFile) {
      setPreview("");
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex-1 rounded-theme-main bg-[color:var(--theme-navy-darker)] flex items-center justify-center relative hover:opacity-80">
        <input
          type="file"
          className="h-full w-full absolute left-0 right-0 top-0 opacity-0 cursor-pointer"
          accept="image/*"
          onChange={onSelectFile}
        />
        {selectedFile ? (
          <img src={preview} className="h-10" />
        ) : (
          <Iconly name="Image2" />
        )}
      </div>
      <div>
        <FormInput title="Image description" titleInset id="image" size="sm" />
      </div>
    </div>
  );
};

export default FormImageInput;
