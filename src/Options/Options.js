import React from "react";

const Options = ({
  moreOptions,
  moreOptions2,
  moreOptions3,
  option1,
  option2,
  option3,
  option4,
  option5
}) => {
  return (
    <div>
      <select>
        <option value="sea">{option1}</option>
        <option value="land">{option2}</option>
        {moreOptions && <option value="land">{option3}</option>}
      </select>
    </div>
  );
};

export default Options;
