// what will be shown in the console?
function Promise3() {
  const callPromise3 = () => {
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
        <button className="button-blue" onClick={callPromise3}>
          Check Promise3
        </button>
      </div>
    </div>
  );
}

export default Promise3;
