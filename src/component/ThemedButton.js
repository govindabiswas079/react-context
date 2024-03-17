import React, { Fragment } from "react";
import { ThemeContext } from "../context/ThemeProvider";

// Step 3: Create Consumer Component
export class ThemedButton extends React.Component {
    static contextType = ThemeContext;
    render() {
        const { theme, toggleTheme } = this.context;

        return (
            <Fragment>
                {/* <ThemeContext.Consumer>
                    {({ theme, toggleTheme }) => ( */}
                        <button
                            style={{
                                backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
                                color: theme === 'light' ? '#000000' : '#ffffff'
                            }}
                            onClick={() => toggleTheme()}
                        >
                            Toggle Theme
                        </button>
                    {/* )}
                </ThemeContext.Consumer> */}
            </Fragment>
        );
    }
}