import { FC } from "react";
import { Item } from "../../type/interface";

const listItem: FC<Item> = ({ title, value }) => {
  return (
    <li>
      {title}: <span className="font-semibold">{value}</span>
    </li>
  );
};

export default listItem;
