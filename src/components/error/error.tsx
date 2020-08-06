import * as React from "react";

const Error: React.FunctionComponent = () => {

  const styleObj = {
    position: `absolute`,
    top: 0,
    left: 0,
    width: `200px`,
    height: `100px`,
    border: `2px solid red`
  } as React.CSSProperties;

  return (
    <div className="error" style={styleObj} >
      <span>Сервер недоступен</span>
    </div>
  );
};

export default Error;
