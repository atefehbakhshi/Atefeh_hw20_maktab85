import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { formActions } from "../../store/form";
import useInput from "../../hooks/use-input";
import Input from "./Input";

import {
  cooperationPositionPattern,
  emailPattern,
  namePattern,
  phonePattern,
} from "../../validation/validPatterns";
import inputObject from "./inputObj";
import { selectedFile } from "../../type/interface";

const Form = () => {
  const [entredResume, setEntredResum] = useState({});
  const dispatch = useDispatch();

  const {
    entredValue: entredName,
    isValid: isNameValid,
    valueChangeHandler: nameChangeHandler,
  } = useInput(
    (str: string) => str.match(namePattern) && str.trim().length > 3
  );

  const {
    entredValue: entredEmail,
    isValid: isEmailValid,
    valueChangeHandler: emailChangeHandler,
  } = useInput((str: string) => str.match(emailPattern));

  const {
    entredValue: entredPosition,
    isValid: isPositionValid,
    valueChangeHandler: positionChangeHandler,
  } = useInput(
    (str: string) =>
      str.match(cooperationPositionPattern) && str.trim().length > 3
  );

  const {
    entredValue: entredPhone,
    isValid: isPhoneValid,
    valueChangeHandler: phoneChangeHandler,
  } = useInput((str: string) => str.match(phonePattern) && str.length === 11);

  const fileChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const fileInfo = event.target.value.split(/(\\|\/)/g).pop();
    const completedName: string[] | undefined = fileInfo?.split(".");

    const info: selectedFile = {
      name: completedName && completedName[0],
      format: completedName && completedName[1],
    };

    setEntredResum(info);
  };

  const loginHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isNameValid && isPhoneValid && isPhoneValid && isPositionValid) {
      dispatch(
        formActions.showUserInfo({
          name: entredName,
          email: entredEmail,
          position: entredPosition,
          phone: entredPhone,
          resume: entredResume,
        })
      );
    }
  };

  return (
    <form
      className="flex flex-col gap-4 px-5 py-10 bg-[#eef3fa] rounded-xl w-full max-w-4xl"
      onSubmit={loginHandler}
    >
      <div className="flex justify-between gap-3">
        <Input
          info={inputObject.name}
          onChangeHandler={nameChangeHandler}
          isValid={isNameValid}
        />
        <Input
          info={inputObject.email}
          onChangeHandler={emailChangeHandler}
          isValid={isEmailValid}
        />
      </div>
      <div className="flex justify-between gap-3">
        <Input
          info={inputObject.position}
          onChangeHandler={positionChangeHandler}
          isValid={isPositionValid}
        />
        <Input
          info={inputObject.phone}
          onChangeHandler={phoneChangeHandler}
          isValid={isPhoneValid}
        />
      </div>
      <div className="flex justify-between gap-3">
        <Input info={inputObject.resume} onChangeHandler={fileChangeHandler} />
      </div>
      <button className="text-white rounded-3xl w-3/12 py-2 px-6 mx-auto mt-4">
        ارسال درخواست
      </button>
    </form>
  );
};

export default Form;
