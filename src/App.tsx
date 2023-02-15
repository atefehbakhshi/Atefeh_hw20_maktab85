import { useSelector } from "react-redux";
import { RootState } from "./type/type";
import Form from "./components/form";
import ShowResult from "./components/showResult";
import "./App.css";

function App() {
  const isLogin = useSelector((state: RootState) => state.form.auth);

  return (
    <div className="flex justify-center items-center h-screen p-4">
      {!isLogin ? <Form /> : <ShowResult />}
    </div>
  );
}

export default App;
