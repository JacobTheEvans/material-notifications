import { Notification } from '../components/SnackbarControlled';
declare global {
    interface Window {
        SNACKBAR_REACT: any;
    }
}
export declare function snackbar(notification: Notification): void;
