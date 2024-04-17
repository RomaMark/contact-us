import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import "./styles.css";

const GetCountry: React.FC = () => {
  const [selected, setSelected] = useState("");

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
