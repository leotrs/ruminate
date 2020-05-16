import React from "react";
import { RecoilRoot } from "recoil";

const Root = (props) => {
  return (
    <div className="root">
      <RecoilRoot {...props} />
    </div>
  );
};

export default Root;
