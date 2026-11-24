declare const component: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare function __VLS_template(): {
    __VLS_Slots: {
        [x: `cell-${any}`]: (props: {
            item: any;
            value: any;
        }) => any;
    } & {
        actions?: (props: {
            item: any;
        }) => any;
    };
};
declare const __VLS_base: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    columns: {
        type: ArrayConstructor;
        required: true;
    };
    items: {
        type: ArrayConstructor;
        required: true;
    };
    bulk: {
        type: BooleanConstructor;
        default: boolean;
    };
    actions: {
        type: BooleanConstructor;
        default: boolean;
    };
    selected: {
        type: ArrayConstructor;
        required: true;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:selected": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    columns: {
        type: ArrayConstructor;
        required: true;
    };
    items: {
        type: ArrayConstructor;
        required: true;
    };
    bulk: {
        type: BooleanConstructor;
        default: boolean;
    };
    actions: {
        type: BooleanConstructor;
        default: boolean;
    };
    selected: {
        type: ArrayConstructor;
        required: true;
    };
}>> & Readonly<{
    "onUpdate:selected"?: (...args: any[]) => any;
}>, {
    actions: boolean;
    bulk: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;

export default component;
