declare const component: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare function __VLS_template(): {
    __VLS_Slots: {
        iconPaginationPrev?: (props: {}) => any;
    } & {
        iconPaginationNext?: (props: {}) => any;
    };
};
declare const __VLS_base: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    pagination: {
        type: ObjectConstructor;
        default: {};
    };
    navigate: {
        type: FunctionConstructor;
        default: any;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    pagination: {
        type: ObjectConstructor;
        default: {};
    };
    navigate: {
        type: FunctionConstructor;
        default: any;
    };
}>> & Readonly<{}>, {
    pagination: Record<string, any>;
    navigate: Function;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;

export default component;
