import React, {
  Children,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type context = {
  isCreateModelVisible: boolean;
  setIsCreateModelVisible: Dispatch<SetStateAction<boolean>>;
};

const appcontext = React.createContext<context>({} as context);

function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [isCreateModelVisible, setIsCreateModelVisible] =
    useState<boolean>(false);
  const Value = { isCreateModelVisible, setIsCreateModelVisible };
  return <appcontext.Provider value={Value}>{children}</appcontext.Provider>;
}
export default AppContextProvider;
export const useAppContext: () => context = () => useContext(appcontext);
