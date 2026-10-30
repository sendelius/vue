export function useCaptcha(): import('pinia').Store<"captcha", Pick<{
    token: import('vue').Ref<string, string>;
    isInit: import('vue').Ref<boolean, boolean>;
    isLoading: import('vue').Ref<boolean, boolean>;
    init: () => Promise<any>;
}, "isInit" | "token" | "isLoading">, Pick<{
    token: import('vue').Ref<string, string>;
    isInit: import('vue').Ref<boolean, boolean>;
    isLoading: import('vue').Ref<boolean, boolean>;
    init: () => Promise<any>;
}, never>, Pick<{
    token: import('vue').Ref<string, string>;
    isInit: import('vue').Ref<boolean, boolean>;
    isLoading: import('vue').Ref<boolean, boolean>;
    init: () => Promise<any>;
}, "init">>;
