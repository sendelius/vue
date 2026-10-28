declare const component: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare var __VLS_1: {};
declare var __VLS_3: {};
declare var __VLS_5: {};
declare const __VLS_base: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
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
    title: {
        type: StringConstructor;
        default: string;
    };
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
    title: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;

export default component;
