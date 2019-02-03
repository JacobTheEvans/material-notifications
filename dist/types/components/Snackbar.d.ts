import React from 'react';
export declare enum Type {
    alert = "alert",
    info = "info",
    warning = "warning",
    plain = "plain"
}
interface IProps {
    message: string;
    type: Type;
    onExit: Function;
    timeout: number;
}
interface IState {
    isActive: boolean;
}
declare class Snackbar extends React.Component<IProps, IState> {
    state: IState;
    componentDidMount(): void;
    exit: () => void;
    render(): JSX.Element;
}
export default Snackbar;
