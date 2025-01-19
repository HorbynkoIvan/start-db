import React, { useState } from "react";
import { PlanetDetails, PlanetList } from "@components/sw-components";
import Row from "@components/row";

export const PlanetsPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const onItemSelected = (selectedItem) => {
    debugger;
    setSelectedItem({ selectedItem });
  };

  return (
    <Row
      left={<PlanetList onItemSelected={onItemSelected} />}
      right={<PlanetDetails itemId={selectedItem} />}
    />
  );
};
