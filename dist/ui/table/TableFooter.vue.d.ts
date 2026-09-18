declare const component: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_base: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    columns: {
        type: ArrayConstructor;
        required: true;
    };
    items: {
        type: ArrayConstructor;
        required: true;
    };
    pagination: {
        type: ObjectConstructor;
        default: {};
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
    tableWrap: {
        type: ObjectConstructor;
        required: true;
    };
    table: {
        type: ObjectConstructor;
        required: true;
    };
    navigate: {
        type: FunctionConstructor;
        default: any;
    };
    bulkActions: {
        type: ArrayConstructor;
        default: any[];
    };
}>, {
    syncScroll: (scrollLeft: any) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:scroll-left": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    columns: {
        type: ArrayConstructor;
        required: true;
    };
    items: {
        type: ArrayConstructor;
        required: true;
    };
    pagination: {
        type: ObjectConstructor;
        default: {};
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
    tableWrap: {
        type: ObjectConstructor;
        required: true;
    };
    table: {
        type: ObjectConstructor;
        required: true;
    };
    navigate: {
        type: FunctionConstructor;
        default: any;
    };
    bulkActions: {
        type: ArrayConstructor;
        default: any[];
    };
}>> & Readonly<{
    "onUpdate:scroll-left"?: (...args: any[]) => any;
}>, {
    actions: boolean;
    pagination: Record<string, any>;
    navigate: Function;
    bulk: boolean;
    bulkActions: unknown[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    iconFooterActions?: (props: {}) => any;
} & {
    iconPaginationPrev?: (props: {}) => any;
} & {
    iconPaginationNext?: (props: {}) => any;
};

export default component;
