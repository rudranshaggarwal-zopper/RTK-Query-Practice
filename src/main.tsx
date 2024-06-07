import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
// import { Provider } from "react-redux";
// import { store } from "./redux/store/store.ts";
import { myRouter } from "./components/router.tsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <RouterProvider router={myRouter}/>

      {/* <App /> */}
    {/* </RouterProvider> */}
    {/* </Provider> */}
  </React.StrictMode>
);
