// what will be shown in the console?
function Promise1() {
  const callPromise1 = () => {
    console.log("apple");

    setTimeout(() => console.log("melon"), 0);

    Promise.resolve("pear").then((res) => console.log(res));

    new Promise((res, rej) => {
      console.log("strawberry");
      res("orange");
    }).then((response) => console.log(response));

    console.log("blueberry");
  };

  return (
    <div className=" flex flex-col">
      <div className=" ">
        <button className="button-blue" onClick={callPromise1}>
          Check Promise1
        </button>
      </div>
    </div>
  );
}

export default Promise1;
