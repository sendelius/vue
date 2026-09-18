declare const component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    city: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    region: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    country: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: (StringConstructor | BooleanConstructor)[];
        default: string;
    };
    error: {
        type: StringConstructor;
        default: string;
    };
    autocomplete: {
        type: FunctionConstructor;
        default: any;
    };
}>, {
    validate: () => boolean;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:city": (...args: any[]) => void;
    "update:region": (...args: any[]) => void;
    "update:country": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    city: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    region: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    country: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: (StringConstructor | BooleanConstructor)[];
        default: string;
    };
    error: {
        type: StringConstructor;
        default: string;
    };
    autocomplete: {
        type: FunctionConstructor;
        default: any;
    };
}>> & Readonly<{
    "onUpdate:city"?: (...args: any[]) => any;
    "onUpdate:region"?: (...args: any[]) => any;
    "onUpdate:country"?: (...args: any[]) => any;
}>, {
    label: string | boolean;
    error: string;
    autocomplete: Function;
    country: string;
    city: string | number;
    region: string | number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;

export default component;
