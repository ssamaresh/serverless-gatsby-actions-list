import React, {createContext, useState, useEffect} from 'react';
import netlifyIdentity from 'netlify-identity-widget'

export const IdentityContext = createContext({});

export const IdentityProvider = props => {
  const [user, setUser] = useState();

  useEffect(() => {
    netlifyIdentity.init({});
  });

  netlifyIdentity.on('login', user => {
    netlifyIdentity.close();
    setUser(user);
  })

  netlifyIdentity.on('logout', () => {
    netlifyIdentity.close();
    setUser()
  });

  return (
    <IdentityContext.Provider value={{ identity: netlifyIdentity, user}}>
      {props.children}
    </IdentityContext.Provider>
  )
};

