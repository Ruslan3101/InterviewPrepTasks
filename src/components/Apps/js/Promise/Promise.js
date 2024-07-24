import React from "react";
import Promise1 from "./Promise1";
import Promise2 from "./Promise2";
import Promise3 from "./Promise3";
import OpenConsoleMessage from "../../../../shared/ui/OpenConsoleMessage";
import Promise4 from "./Promise4";

function Promise() {
  return (
    <div>
      <div className=" justify-items-center  ">
        <OpenConsoleMessage />
      </div>
      <div className=" flex justify-center">
        <Promise1 />
        <Promise2 />
        <Promise3 />
        <Promise4 />
      </div>
    </div>
  );
}

export default Promise;
