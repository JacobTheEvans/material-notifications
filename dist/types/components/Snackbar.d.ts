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
}
declare const Snackbar: React.FunctionComponent<IProps>;
export default Snackbar;
