declare const component: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_base: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    href: {
        type: StringConstructor;
        default: string;
    };
    to: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (value: unknown) => boolean;
    };
    variant: {
        type: StringConstructor;
        default: string;
        validator: (value: unknown) => boolean;
    };
    hover: {
        type: StringConstructor;
        default: string;
        validator: (value: unknown) => boolean;
    };
    progressLabel: {
        type: StringConstructor;
        default: string;
    };
    progressShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    withIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    href: {
        type: StringConstructor;
        default: string;
    };
    to: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (value: unknown) => boolean;
    };
    variant: {
        type: StringConstructor;
        default: string;
        validator: (value: unknown) => boolean;
    };
    hover: {
        type: StringConstructor;
        default: string;
        validator: (value: unknown) => boolean;
    };
    progressLabel: {
        type: StringConstructor;
        default: string;
    };
    progressShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    withIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    size: string;
    href: string;
    to: string;
    variant: string;
    hover: string;
    progressLabel: string;
    progressShow: boolean;
    withIcon: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    default?: (props: {}) => any;
} & {
    default?: (props: {}) => any;
} & {
    default?: (props: {}) => any;
};

export default component;
