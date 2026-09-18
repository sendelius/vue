declare const component: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_base: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    type: {
        type: (StringConstructor | BooleanConstructor)[];
        default: string;
    };
    label: {
        type: (StringConstructor | BooleanConstructor)[];
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
    error: {
        type: StringConstructor;
        default: string;
    };
    autocompleteOff: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    focus: () => void;
    blur: () => void;
    setCustomValidity: (message: any) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    focus: (...args: any[]) => void;
    blur: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    type: {
        type: (StringConstructor | BooleanConstructor)[];
        default: string;
    };
    label: {
        type: (StringConstructor | BooleanConstructor)[];
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
    error: {
        type: StringConstructor;
        default: string;
    };
    autocompleteOff: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
}>, {
    label: string | boolean;
    type: string | boolean;
    required: boolean;
    modelValue: string | number;
    disabled: boolean;
    error: string;
    autocompleteOff: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    before?: (props: {}) => any;
} & {
    after?: (props: {}) => any;
};

export default component;
