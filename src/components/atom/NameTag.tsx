import React from "react";
import "./NameTag.css";

interface Props {
  name: string;
  handleClick: (event: React.MouseEvent) => void;
  readonly?: boolean;
}

const NameTag = ({ name, handleClick, readonly = false }: Props) => {
  return (
    <div className="name-tag">
      <div onClick={(e) => !readonly && handleClick(e)}>{name}</div>
      {!readonly && <div className="delete-text">x</div>}
    </div>
  );
};

export default NameTag;
