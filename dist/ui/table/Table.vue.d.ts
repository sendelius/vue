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
type __VLS_Slots = {
    [x: `cell-${any}`]: (props: {
        item: unknown;
        value: any;
    }) => any;
} & {
    iconHeaderSortDesc?: (props: {}) => any;
} & {
    iconHeaderSortAsc?: (props: {}) => any;
} & {
    actions?: (props: {
        item: unknown;
    }) => any;
} & {
    iconPaginationPrev?: (props: {}) => any;
} & {
    iconPaginationNext?: (props: {}) => any;
} & {
    iconFooterActions?: (props: {}) => any;
};

export default component;
