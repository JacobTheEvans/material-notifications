import React from 'react';
import { Type } from '../components/Snackbar';
import { Position } from '../components/SnackbarContainer';
export interface Notification {
    message: string;
    position: Position;
    type: Type;
    timeout: number;
}
interface IState {
    notifications: Notification[];
}
declare class SnackbarControlled extends React.Component<{}, IState> {
    state: IState;
    add: (notification: Notification) => void;
    remove: (index: number) => void;
    render(): JSX.Element;
}
export default SnackbarControlled;
