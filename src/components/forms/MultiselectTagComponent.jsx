import React from "react";
import Select from "react-select";

const MultiselectTagComponent = ({ options, handleAddTagField, values }) => {
  return (
    <Select
      isMulti
      value={values}
      options={options}
      className="block appearance-none  border dark:bg-dark  border-gray-300 cursor-pointer rounded-md py-1 px-1 focus:outline-none focus:border-gray-400 w-full"
      name="tags"
      htmlFor="tags"
      placeholder="Palabras Clave"
      onChange={handleAddTagField}
    />
  );
};

export default MultiselectTagComponent;
