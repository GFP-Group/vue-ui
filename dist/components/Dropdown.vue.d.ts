type DropdownItem = {
    text: string;
    onClick?: (event: MouseEvent) => void;
    danger?: boolean;
};
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type __VLS_Props = {
    label?: string;
    items?: DropdownItem[];
    primary?: boolean;
    outline?: boolean;
    danger?: boolean;
    warning?: boolean;
    success?: boolean;
    size?: ButtonSize;
};
declare var __VLS_1: {
    toggle: () => Promise<void>;
    open: boolean;
}, __VLS_3: {};
type __VLS_Slots = {} & {
    trigger?: (props: typeof __VLS_1) => any;
} & {
    default?: (props: typeof __VLS_3) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
