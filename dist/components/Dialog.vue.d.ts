type DialogType = 'default' | 'danger' | 'success' | 'warning';
type ButtonVariant = 'primary' | 'default' | 'light' | 'danger' | 'warning' | 'success';
type DialogButton = {
    label: string;
    action?: 'confirm' | 'cancel' | string;
    type?: ButtonVariant;
    onClick?: () => void;
};
type __VLS_Props = {
    visible?: boolean;
    title?: string;
    message?: string;
    type?: DialogType;
    buttons?: DialogButton[];
    confirmText?: string;
    cancelText?: string;
    showCancel?: boolean;
    closeOnOutside?: boolean;
    className?: string;
};
declare var __VLS_5: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_5) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    cancel: () => any;
    close: () => any;
    confirm: () => any;
    "update:visible": (v: boolean) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onCancel?: (() => any) | undefined;
    onClose?: (() => any) | undefined;
    onConfirm?: (() => any) | undefined;
    "onUpdate:visible"?: ((v: boolean) => any) | undefined;
}>, {
    className: string;
    type: DialogType;
    title: string;
    buttons: DialogButton[];
    message: string;
    visible: boolean;
    confirmText: string;
    cancelText: string;
    showCancel: boolean;
    closeOnOutside: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
