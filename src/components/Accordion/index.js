import React, { useState } from "react";
import Fold from "./Fold";
import Data from "./Data";

const Accordion = () => {
  const [active, setActive] = useState(0);

  const selectFold = (foldNum) => {
    const current = active === foldNum ? -1 : foldNum;
    setActive(() => current);
  };

  return (
    <div className='accordion'>
      {Data.map((content, i) => {
        return (
          <Fold
            key={`${i}-${content.title}`}
            {...content}
            handle={() => selectFold(i)}
            active={i === active}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
