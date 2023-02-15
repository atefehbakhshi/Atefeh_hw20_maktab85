import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../../store/form";
import { UserInfo } from "../../type/interface";
import { RootState } from "../../type/type";
import Item from "./listItem";

const ShowResult: FC = () => {
  const result = useSelector((state: RootState) => state.form.userInfo);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    const userInfo: UserInfo = {
      name: "",
      email: "",
      position: "",
      phone: 0,
      resume: {
        name: "",
        format: "",
      },
    };
    const auth = false;
    dispatch(formActions.showUserInfo({ userInfo, auth }));
  };

  return (
    <div className="flex flex-col gap-4 p-10 bg-[#eef3fa] rounded-xl w-full max-w-xl">
      <ul className="flex flex-col gap-4 py-5 text-left ">
        <Item title={"name"} value={result.name} />
        <Item title={"email"} value={result.email} />
        <Item title={"position"} value={result.position} />
        <Item title={"phone"} value={result.phone} />
        <Item title={"resume-name"} value={result.resume.name} />
        <Item title={"resume-format"} value={result.resume.format} />
      </ul>
      <button
        className="text-white rounded-3xl w-3/12 py-2 px-6 mx-auto mt-4"
        onClick={logoutHandler}
      >
        Logout
      </button>
    </div>
  );
};

export default ShowResult;
