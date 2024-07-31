import Promise1 from "./Promise1";
import Promise2 from "./Promise2";
import Promise3 from "./Promise3";

import Promise4 from "./Promise4";
import OpenConsoleMessage from "../../../shared/ui/OpenConsoleMessage";

function Promise() {
  return (
    <div>
      <div className=" justify-items-center  ">
        <OpenConsoleMessage />
      </div>
      <div className=" flex justify-center space-x-2">
        <Promise1 />
        <Promise2 />
        <Promise3 />
        <Promise4 />
      </div>
    </div>
  );
}

export default Promise;
