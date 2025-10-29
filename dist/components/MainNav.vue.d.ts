import type { Component } from 'vue';
type NavItem = {
    label?: string;
    icon?: Component;
    value?: string;
    onClick?: () => void;
    color?: string;
    colorDark?: string;
};
type __VLS_Props = {
    items: NavItem[];
    className?: string;
    activeValue?: string;
    collapseBreakpointPx?: number;
    largeGapBreakpointPx?: number;
};
declare var __VLS_9: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_9) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    select: (value: string, item?: NavItem | undefined) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: ((value: string, item?: NavItem | undefined) => any) | undefined;
}>, {
    collapseBreakpointPx: number;
    largeGapBreakpointPx: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
