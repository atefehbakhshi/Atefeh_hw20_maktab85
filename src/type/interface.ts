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

export interface selectedFile {
  name?: string;
  format?: string;
}
