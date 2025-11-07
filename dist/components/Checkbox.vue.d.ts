type __VLS_Props = {
    label?: string;
    modelValue?: any;
    checked?: boolean;
    id?: string;
    name?: string;
    disabled?: boolean;
    className?: string;
    value?: any;
    trueValue?: any;
    falseValue?: any;
    onChange?: (checked: boolean, ev: Event) => void;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    change: (value: any, ev: Event) => any;
    "update:modelValue": (value: any) => any;
    "update:checked": (value: boolean) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((value: any, ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    "onUpdate:checked"?: ((value: boolean) => any) | undefined;
}>, {
    label: string;
    disabled: boolean;
    modelValue: any;
    checked: boolean;
    value: any;
    trueValue: any;
    falseValue: any;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
