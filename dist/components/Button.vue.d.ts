type ButtonType = 'primary' | 'default' | 'light' | 'danger' | 'warning' | 'success';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type __VLS_Props = {
    label: string;
    labelLoading?: string;
    type?: ButtonType;
    size?: ButtonSize;
    className?: string;
    onClick?: (event: globalThis.MouseEvent) => void;
    primary?: boolean;
    default?: boolean;
    light?: boolean;
    danger?: boolean;
    warning?: boolean;
    success?: boolean;
    loading?: boolean;
    disabled?: boolean;
};
declare var __VLS_10: {}, __VLS_30: {};
type __VLS_Slots = {} & {
    prefix?: (props: typeof __VLS_10) => any;
} & {
    suffix?: (props: typeof __VLS_30) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    size: ButtonSize;
    type: ButtonType;
    loading: boolean;
    disabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
