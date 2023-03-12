import React, { useState } from "react";

interface IState {
  [kay: string]: any;
}

const Authstate = React.createContext<IState | null>(null);

const AucthContextProvider = (props: any) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  return (
    <Authstate.Provider value={{ loggedIn }}>
      {props.children}
    </Authstate.Provider>
  );
};

export default AucthContextProvider;
