import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const GetCountry: React.FC = () => {
  const [selected, setSelected] = useState<string>("");

  return (
    <ReactFlagsSelect
      selected={selected}
      onSelect={(code: string) => setSelected(code)}
      placeholder="Country"
      searchable
      searchPlaceholder="Search countries"
    />
  );
};

export default GetCountry;
