// what will be shown in the console?

// what will be shown in the console?
function Promise4() {
  const callPromise4 = () => {
    console.log("script start");

    setTimeout(function () {
      console.log("setTimeout");
    }, 0);

    Promise.resolve()
      .then(function () {
        console.log("promise1");
      })
      .then(function () {
        console.log("promise2");
      });

    new Promise((resolve) => {
      console.log("promise3");
    });

    console.log("script end");
  };

  return (
    <div className="">
      <div className=" ">
        <button
         className="button-red"
          onClick={callPromise4}
        >
          Check Promise4
        </button>
      </div>
    </div>
  );
}

export default Promise4;
