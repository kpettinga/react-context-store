import { useContext } from "react";
import { StoreContext } from "./store";

export const useStore = (callback) => {
    const context = useContext(StoreContext);
    if (!context) {
      throw new Error("useStore() must be used within <StoreProvider>");
    }
    const [state, dispatch] = context
    return [callback ? callback(state) : state, dispatch]
}