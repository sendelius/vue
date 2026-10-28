declare const component: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare var __VLS_26: `cell-${any}`;
declare var __VLS_27: {
    item: any;
    value: any;
};
declare var __VLS_10: {};
declare var __VLS_13: {};
declare var __VLS_30: {
    item: any;
};
declare var __VLS_41: {};
declare var __VLS_44: {};
declare var __VLS_47: {};
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
    bulkActions: {
        type: ArrayConstructor;
        default: () => any[];
    };
    sort: {
        type: ObjectConstructor;
        default: {};
    };
    textEmpty: {
        type: StringConstructor;
        default: string;
    };
    navigate: {
        type: FunctionConstructor;
        default: any;
    };
    bulkWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    actionsWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
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
    bulkActions: {
        type: ArrayConstructor;
        default: () => any[];
    };
    sort: {
        type: ObjectConstructor;
        default: {};
    };
    textEmpty: {
        type: StringConstructor;
        default: string;
    };
    navigate: {
        type: FunctionConstructor;
        default: any;
    };
    bulkWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    actionsWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>> & Readonly<{
    "onUpdate:sort"?: (...args: any[]) => any;
}>, {
    actions: boolean;
    sort: Record<string, any>;
    pagination: Record<string, any>;
    navigate: Function;
    bulk: boolean;
    bulkActions: unknown[];
    textEmpty: string;
    bulkWidth: string | number;
    actionsWidth: string | number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;

export default component;
