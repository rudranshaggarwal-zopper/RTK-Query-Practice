import { Provider } from "react-redux";
import "./App.css";
// import { UseDispatch, useDispatch, useSelector } from "react-redux";
// import { AppDispatch, storeState } from "./redux/store";
// import { decrementFunc, incrementFunc } from "./redux/features/countSlice";
import Read from "./components/Read";
import { store } from "./redux/store/store.ts";
import { UserCreateForm } from "./components/CreateOrUpdateForm.tsx";

function App() {
  // const count=useSelector({state:Object}=>state.countSliceReducer)
  // const count = useSelector(
  //   (state: storeState) => state.countSliceReducer.count
  // );

  // const dispatch:AppDispatch=useDispatch()

  // const increment=()=>{
  //   dispatch(incrementFunc())
  // }
  // const decrement=()=>{
  //   dispatch(decrementFunc())
  // }

  return (
    <>
      {/* <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Dec</button>
      <div>{count}</div> */}
      <Provider store={store}>
        <UserCreateForm/>
        <Read />
      </Provider>
    </>
  );
}

export default App;
