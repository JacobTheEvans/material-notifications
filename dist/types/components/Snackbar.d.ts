import React from 'react';
declare enum Type {
    alert = 0,
    info = 1,
    warning = 2
}
interface IProps {
    message: string;
    type: Type;
}
declare const Snackbar: React.FunctionComponent<IProps>;
export default Snackbar;
