// import React from 'react';
// export const ThemeContext = React.createContext();
// export class ThemeProvider extends React.Component {
//     state = {
//         theme: 'light',
//         toggleTheme: () => {
//             this.setState(prevState => ({
//                 theme: prevState.theme === 'light' ? 'dark' : 'light'
//             }));
//         }
//     };

//     render() {
//         return (
//             <ThemeContext.Provider value={this.state}>
//                 {this.props.children}
//             </ThemeContext.Provider>
//         );
//     }
// }


import React from 'react';

export const ThemeContext = React.createContext();
export class ThemeProvider extends React.Component {
    state = {
        theme: 'light'
    };

    toggleTheme = () => {
        this.setState(prevState => ({
            theme: prevState.theme === 'light' ? 'dark' : 'light'
        }));
    };

    render() {
        return (
            <ThemeContext.Provider
                value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
            >
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}