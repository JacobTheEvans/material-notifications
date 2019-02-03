import { Notification } from '../components/SnackbarControlled';
declare global {
    interface Window {
        SNACKBAR_REACT: any;
        snackbar: any;
    }
}
export declare function snackbar(notification: Notification): void;
