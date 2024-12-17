import React, { useContext } from 'react';
    import ThemeContext from '../ThemeContext';
    import { Button } from 'shadcn-ui';
    import { Separator } from 'shadcn-ui';

    const Header = () => {
      const { theme, toggleTheme } = useContext(ThemeContext);

      return (
        <header className={`header ${theme}`}>
          <h1 className="text-2xl font-semibold">Dev Blog</h1>
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={toggleTheme}>
              Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <Button variant="ghost">Login</Button>
          </div>
        </header>
      );
    };

    export default Header;
