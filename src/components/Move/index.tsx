import React from "react";

interface Props {
  direction: string;
}

function Move(props: Props) {
  const {} = props;

  return (
    <div className={`main-selection-projects-content-${props.direction}`}>
      <div className={`main-selection-projects-content-${props.direction}-box`}>
        <img
          className={`main-selection-projects-content-${props.direction}-box-icon`}
          src="/images/arrow.png"
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default Move;
