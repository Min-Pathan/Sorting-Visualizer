import { compose, createStore } from "redux";
import rootReducer from "./reducer";

// const store = createStore(rootReducer);

const store = createStore(
    rootReducer,
  compose(typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined" ?
      window.devToolsExtension() :
      f => f
  )
)
export default store;
