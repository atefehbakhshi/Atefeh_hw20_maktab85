import { ChangeEvent } from "react";

interface InputObject {
  text: string;
  id: string;
  type: string;
  errText?: string;
  accepTedFormat?: string;
  placeHolder?: string;
  isValid?: boolean;
}

export interface InputType {
  info: InputObject;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  isValid?: boolean;
}

export interface Resume {
  name?: string;
  format?: string;
}

// Item
export interface Item {
  title?: string;
  value?: string | number;
}

// store
export interface UserInfo {
  name: string;
  email: string;
  position: string;
  phone: number;
  resume: Resume;
}

export interface InitialFormState {
  userInfo: UserInfo;
  auth: boolean;
}
