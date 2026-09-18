declare const component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    confirmVariant: {
        type: StringConstructor;
        default: string;
        validator: (value: unknown) => boolean;
    };
    cancelVariant: {
        type: StringConstructor;
        default: string;
        validator: (value: unknown) => boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    confirm: (...args: any[]) => void;
    cancel: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    confirmVariant: {
        type: StringConstructor;
        default: string;
        validator: (value: unknown) => boolean;
    };
    cancelVariant: {
        type: StringConstructor;
        default: string;
        validator: (value: unknown) => boolean;
    };
}>> & Readonly<{
    onConfirm?: (...args: any[]) => any;
    onCancel?: (...args: any[]) => any;
}>, {
    cancelText: string;
    cancelVariant: string;
    confirmText: string;
    confirmVariant: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;

export default component;
