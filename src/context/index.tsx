import React, { ReactNode, useState } from "react";
import PropTypes from "prop-types";

interface TokensInterface {
  access: string | null,
  refresh: string | null
}
type ContextInterface = {
  tokens: TokensInterface,
  setTokens: (c: TokensInterface) => void
}

const TokenContext = React.createContext<ContextInterface>({
  tokens: {
    access: null,
    refresh: null
  },
  setTokens: () => null
});

export const TokenProvider = ({ children } : { children: ReactNode}) => {
  const [tokens, setTokens] = useState<TokensInterface>({
      access: null,
      refresh: null
  });

  return (
    <TokenContext.Provider value={{ tokens, setTokens }}>
      {children}
    </TokenContext.Provider>
  );
};

TokenProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TokenContext;
