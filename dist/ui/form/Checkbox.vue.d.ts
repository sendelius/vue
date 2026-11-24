declare const component: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare function __VLS_template(): {
    __VLS_Slots: {
        before?: (props: {}) => any;
    } & {
        label?: (props: {}) => any;
    } & {
        after?: (props: {}) => any;
    };
};
declare const __VLS_base: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | BooleanConstructor)[];
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
        type: StringConstructor;
        default: string;
    };
    error: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | BooleanConstructor)[];
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
        type: StringConstructor;
        default: string;
    };
    error: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
}>, {
    value: string;
    label: string;
    required: boolean;
    modelValue: string | boolean;
    disabled: boolean;
    error: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;

export default component;
