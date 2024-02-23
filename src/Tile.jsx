export function Tile({ content: Content, flip, state }) {
  switch (state) {
    case "start":
      return (
        <Back
          className="bg-indigo-300 text-center w-1/5 p-7 ml-2 rounded-md flex flex-col items-center mt-2"
          flip={flip}
        />
      );
    case "flipped":
      return (
        <Front className="bg-indigo-500 text-center mt-2 ml-2 rounded-md p-6 flex flex-col w-1/5 text-white items-center">
          <Content
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
              verticalAlign: "top",
            }}
          />
        </Front>
      );
    case "matched":
      return (
        <Matched className="text-gray-300 flex flex-col items-center w-1/5 ml-2 mt-2">
          <Content
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
              verticalAlign: "top",
            }}
          />
        </Matched>
      );
    default:
      throw new Error("Invalid state " + state);
  }
}

function Back({ className, flip }) {
  return (
    <div onClick={flip} className={className}>
      ?
    </div>
  );
}

function Front({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Matched({ className, children }) {
  return <div className={className}>{children}</div>;
}
