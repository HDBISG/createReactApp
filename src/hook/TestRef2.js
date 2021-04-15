import React from "react";

export default function TestRef2(props) {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    console.log(
      inputRef.current.value,
      inputRef.current.type,
      inputRef.current.data
    );
    console.log(inputRef, inputRef.current);
    inputRef.current.focus();
    inputRef.current.value = "abc";
  });

  return (
    <div>
      <input type="text" value="LiSi" />
      <input
        type="text"
        value="ZhangSan"
        ref={inputRef}
        data="dataRefValue"
      />
    </div>
  );
}
