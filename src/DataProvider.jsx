import React, { Component, createContext } from 'react';


export const DataContext = createContext({});



export default class DataProvider extends Component {
    state = {
        value: 100,
        isRunning: false
    }


    setValue = (newValue) => {


        this.setState({ value: newValue });
    }

    increment = () => {


        const currentValue = this.state.value;
        this.setState({ value: currentValue + 1 });
    }

    decrement = () => {
        const currentValue = this.state.value;
        this.setState({ value: currentValue - 1 });
    }
    render() {
        const { children } = this.props;

        const value = {
            ...this.state,
            increment: this.increment,
            decrement: this.decrement,
            setValue: this.setValue
        }


        return (
            <DataContext.Provider value={value}>
                {children}
            </DataContext.Provider>
        )
    }


}