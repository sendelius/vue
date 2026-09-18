declare const component: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
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
type __VLS_Slots = {
    before?: (props: {}) => any;
} & {
    default?: (props: {
        item: any;
        index: number;
    }) => any;
} & {
    empty?: (props: {}) => any;
};

export default component;
