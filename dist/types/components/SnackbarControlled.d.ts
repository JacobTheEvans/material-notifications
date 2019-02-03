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
    bottomRight: Notification[];
    bottomLeft: Notification[];
    topRight: Notification[];
    topLeft: Notification[];
}
declare class SnackbarControlled extends React.Component<{}, IState> {
    state: IState;
    add: (notification: Notification) => void;
    remove: (position: Position, index: number) => void;
    render(): JSX.Element;
}
export default SnackbarControlled;
