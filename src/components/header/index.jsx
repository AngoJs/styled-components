import React from 'react';
import { Wrapper, AppHeader, Button } from './styles';
function Header() {
  return (
    <Wrapper>
      <AppHeader>
        <p>Hello Angojs</p>
        <div>
          <Button light={false} border>
            Button
          </Button>
        </div>
      </AppHeader>
    </Wrapper>
  );
}

export default Header;
