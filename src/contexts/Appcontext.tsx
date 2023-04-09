import { type } from "os";
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
  postType: post;
  setPostType: Dispatch<SetStateAction<post>>;
  postSectionType : postsection;
  setPostSectionType : Dispatch<SetStateAction<postsection>> ;
};
type post = "ordinary" | "image" | "work" | "event";

type postsection= "comment" | "like" | "request";

const appcontext = React.createContext<context>({} as context);

function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [postSectionType, setPostSectionType] = useState<postsection>("comment");
  const [postType, setPostType] = useState<post>("ordinary");
  const [isCreateModelVisible, setIsCreateModelVisible] =
    useState<boolean>(false);
  const Value = {
    isCreateModelVisible,
    setIsCreateModelVisible,
    postType,
    setPostType,
    postSectionType,
    setPostSectionType
  };
  return <appcontext.Provider value={Value}>{children}</appcontext.Provider>;
}
export default AppContextProvider;
export const useAppContext: () => context = () => useContext(appcontext);
