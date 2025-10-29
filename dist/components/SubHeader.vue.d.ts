import type { Component } from 'vue';
type Breadcrumb = {
    label: string;
    to?: string;
    onClick?: () => void;
};
type __VLS_Props = {
    icon?: Component | string;
    breadcrumbs?: Breadcrumb[];
    color?: string;
    colorDark?: string;
    className?: string;
    darkText?: boolean;
};
declare var __VLS_13: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_13) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    color: string;
    breadcrumbs: Breadcrumb[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
