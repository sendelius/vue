export function usePopup(): {
    visible: import('vue').Ref<boolean, boolean>;
    type: import('vue').Ref<string, string>;
    title: import('vue').Ref<string, string>;
    content: import('vue').Ref<string, string>;
    confirmText: import('vue').Ref<string, string>;
    cancelText: import('vue').Ref<string, string>;
    showClose: import('vue').Ref<boolean, boolean>;
    confirmVariant: import('vue').Ref<string, string>;
    cancelVariant: import('vue').Ref<string, string>;
    popupOpen: (options?: {}) => Promise<any>;
    popupClose: (result?: any) => void;
    popupConfirm: (contentValue: any, options?: {}) => Promise<any>;
    popupError: (titleValue: any, options?: {}) => Promise<any>;
    popupSuccess: (contentValue: any, options?: {}) => Promise<any>;
    popupWarning: (contentValue: any, options?: {}) => Promise<any>;
};
