type __VLS_Props = {
    label?: string;
    modelValue?: boolean;
    checked?: boolean;
    id?: string;
    name?: string;
    disabled?: boolean;
    className?: string;
    onChange?: (checked: boolean, ev: Event) => void;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    change: (value: boolean, ev: Event) => any;
    "update:modelValue": (value: boolean) => any;
    "update:checked": (value: boolean) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((value: boolean, ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    "onUpdate:checked"?: ((value: boolean) => any) | undefined;
}>, {
    label: string;
    disabled: boolean;
    modelValue: boolean;
    checked: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
