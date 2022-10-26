import { Iconly } from "react-iconly";
import FormActions from "./FormActions";
import FormImageInput from "./FormImageInput";
import FormInput from "./FormInput";

import { Listbox } from "@headlessui/react";
import { categories } from "../../data";
import { useState } from "react";

const SelectCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div>
      <Listbox value={selectedCategory} onChange={setSelectedCategory}>
        {({ open }) => (
          <>
            <div className="relative  w-full min-w-[185px]">
              <Listbox.Button className="px-4 h-8 cursor-pointer flex items-center justify-between w-full bg-[color:var(--theme-navy-darker)] rounded-lg font-light text-sm">
                <span>{selectedCategory.name}</span>
                <div className="pointer-events-none">
                  <svg
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={open ? "rotate-180" : ""}
                  >
                    <path
                      d="M4.0575 6.74155C4.00917 6.702 3.8025 6.55265 3.6325 6.41354C2.56333 5.59795 0.813333 3.47034 0.279167 2.35675C0.193333 2.18763 0.0116667 1.76006 0 1.53161C0 1.31271 0.06 1.10404 0.181667 0.90492C0.351667 0.656698 0.619167 0.457574 0.935 0.348466C1.15417 0.278227 1.81 0.169118 1.82167 0.169118C2.53917 0.0600097 3.705 0 4.99333 0C6.22083 0 7.33917 0.0600097 8.0675 0.149342C8.07917 0.159571 8.89417 0.26868 9.17333 0.388018C9.68333 0.606917 10 1.03449 10 1.49206V1.53161C9.9875 1.82962 9.67083 2.45631 9.65917 2.45631C9.12417 3.50989 7.46 5.58841 6.35417 6.42377C6.35417 6.42377 6.07 6.65904 5.8925 6.76132C5.6375 6.9209 5.32167 7 5.00583 7C4.65333 7 4.325 6.91067 4.0575 6.74155Z"
                      fill="#FEF6E9"
                    />
                  </svg>
                </div>
              </Listbox.Button>
              <Listbox.Options className="absolute z-10 mt-1 top-10 max-h-60 w-full overflow-auto rounded-md bg-[color:var(--theme-navy-darker)] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {categories.map((category) => (
                  <Listbox.Option
                    key={category.id}
                    value={category}
                    className="p-2 cursor-pointer hover:opacity-80"
                  >
                    {category.name}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default SelectCategories;
