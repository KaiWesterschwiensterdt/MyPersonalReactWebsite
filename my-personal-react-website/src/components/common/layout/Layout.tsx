import React, { ReactNode } from 'react';

// const Layout: React.FC = ({ children }) => {
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-typescript-definitions
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56210
// https://github.com/eps1lon/types-react-codemod
const Layout: React.FC = ({ children }) => {
    return (
        <>
            <header>
                <div></div>
            </header>

            <main>
                <div>{children}</div>
            </main>

            <footer></footer>
        </>
    );
};

export default Layout;
