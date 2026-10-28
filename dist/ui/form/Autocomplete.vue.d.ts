declare const component: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare var __VLS_13: {};
declare namespace __VLS_28 {
    let item: any;
    let index: number;
}
declare var __VLS_30: {};
declare const __VLS_base: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    autocomplete: {
        type: FunctionConstructor;
        default: any;
    };
    label: {
        type: (StringConstructor | BooleanConstructor)[];
        default: string;
    };
    error: {
        type: StringConstructor;
        default: string;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    minLength: {
        type: NumberConstructor;
        default: number;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
}>, {
    focus: () => void;
    blur: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    focus: (...args: any[]) => void;
    blur: (...args: any[]) => void;
    select: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    autocomplete: {
        type: FunctionConstructor;
        default: any;
    };
    label: {
        type: (StringConstructor | BooleanConstructor)[];
        default: string;
    };
    error: {
        type: StringConstructor;
        default: string;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    minLength: {
        type: NumberConstructor;
        default: number;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onSelect?: (...args: any[]) => any;
}>, {
    label: string | boolean;
    required: boolean;
    modelValue: string | number;
    error: string;
    autocomplete: Function;
    minLength: number;
    delay: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;

export default component;
