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
    sort: {
        type: ObjectConstructor;
        default: {};
    };
}>, {
    syncScroll: (scrollLeft: any) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:selected": (...args: any[]) => void;
    "update:sort": (...args: any[]) => void;
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
    tableWrap: {
        type: ObjectConstructor;
        required: true;
    };
    table: {
        type: ObjectConstructor;
        required: true;
    };
    sort: {
        type: ObjectConstructor;
        default: {};
    };
}>> & Readonly<{
    "onUpdate:selected"?: (...args: any[]) => any;
    "onUpdate:sort"?: (...args: any[]) => any;
}>, {
    actions: boolean;
    sort: Record<string, any>;
    bulk: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    iconHeaderSortDesc?: (props: {}) => any;
} & {
    iconHeaderSortAsc?: (props: {}) => any;
};

export default component;
