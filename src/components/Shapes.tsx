import { memo } from "react";
import { useAtom } from "jotai";

import { selectedAtom } from "../atoms/modeMachine";
import { allShapesAtom } from "../atoms/shapes";
import Shape from "./Shape";

export const Shapes = () => {
  const [shapeAtomList] = useAtom(allShapesAtom);
  useAtom(selectedAtom); // to initialize the derived atom (Hmmm)
  return (
    <>
      {shapeAtomList.map((shapeAtom) => (
        <Shape key={`${shapeAtom}`} shapeAtom={shapeAtom} />
      ))}
    </>
  );
};

export default memo(Shapes);
