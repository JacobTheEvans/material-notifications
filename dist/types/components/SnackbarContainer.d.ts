import React, { ReactNode } from 'react';
export declare enum Position {
    bottomRight = "bottomRight",
    bottomLeft = "bottomLeft",
    topRight = "topRight",
    topLeft = "topLeft"
}
interface IProps {
    position: Position;
    children: ReactNode;
}
declare const SnackbarContainer: React.FunctionComponent<IProps>;
export default SnackbarContainer;
