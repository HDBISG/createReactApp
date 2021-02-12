import React, { useState, useRef, memo } from "react";

function InputWithLabel(props) {
    // 这里的myRef为通过外部打入的父级ref节点
    const { label, myRef } = props;
    const [value, setValue] = useState("");
    const handleChange = e => {
      const value = e.target.value;
      setValue(value);
    };
  
    return (
      <div>
        <span>{label}:</span>
        <input type="text" ref={myRef} value={value} onChange={handleChange} />
      </div>
    );
  }
  
  // 这里用forwardRef来承接得到父级传入的ref节点，并将其以参数的形式传给字节点
  const RefInput = React.forwardRef((props, ref) => (
    <InputWithLabel {...props} myRef={ref} />
  ));
  
  // 调用该RefInput的过程
  function TestRef() {
    // 通过useRef hook 获得相应的ref节点
    const myRef = useRef(null);
  
    const handleFocus = () => {
      const node = myRef.current;
      console.log(node);
      node.focus();
    };
  
    return (
      <div className="TestRef">
        <RefInput label={"姓名"} ref={myRef} />
        <button onClick={handleFocus}>focus</button>
      </div>
    );
  }

  export default TestRef;