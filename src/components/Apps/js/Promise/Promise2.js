// what will be shown in the console?
function Promise2() {
  const callPromise2 = () => {
    console.log(1);
    setTimeout(() => console.log(2));

    Promise.resolve().then(() => console.log(3));
    Promise.resolve().then(() => setTimeout(() => console.log(4)));
    Promise.resolve().then(() => console.log(5));

    setTimeout(() => console.log(6));

    console.log(7);
  };

  return (
    <div className="">
      <div className=" ">
        <button className="button-blue" onClick={callPromise2}>
          Check Promise2
        </button>
      </div>
    </div>
  );
}

export default Promise2;
