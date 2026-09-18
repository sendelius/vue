declare const component: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_base: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    content: {
        type: StringConstructor;
        default: string;
    };
    cancelAction: {
        type: BooleanConstructor;
        default: boolean;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
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
    content: {
        type: StringConstructor;
        default: string;
    };
    cancelAction: {
        type: BooleanConstructor;
        default: boolean;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
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
    content: string;
    cancelAction: boolean;
    cancelText: string;
    cancelVariant: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    icon?: (props: {}) => any;
} & {
    content?: (props: {}) => any;
};

export default component;
