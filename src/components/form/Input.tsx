import { FC } from "react";
import { InputType } from "../../type/interface";

const Input: FC<InputType> = ({ info, onChangeHandler, isValid }) => {
  return (
    <div className="flex flex-col gap-1 w-1/2">
      <label htmlFor={info.id}>{info.text}*</label>
      <input
        type={info.type}
        id={info.id}
        className="rounded p-1 bg-white"
        placeholder={info.placeHolder}
        onChange={onChangeHandler}
        accept={info.accepTedFormat}
      />
      {!isValid && <p className="text-red-500 text-xs">{info.errText}</p>}
    </div>
  );
};

export default Input;
