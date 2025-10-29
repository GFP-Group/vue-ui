type Option = string | {
    label: string;
    value: string | number;
    disabled?: boolean;
};
type __VLS_Props = {
    options?: Option[];
    modelValue?: string | number;
    placeholder?: string;
    name?: string;
    disabled?: boolean;
    solid?: boolean;
    darkDarker?: boolean;
    selectClass?: string;
    discColor?: string;
    onChange?: (value: string | number, ev: Event) => void;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    change: (value: string | number, ev: Event) => any;
    "update:modelValue": (value: string | number) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((value: string | number, ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}>, {
    disabled: boolean;
    placeholder: string;
    darkDarker: boolean;
    solid: boolean;
    options: Option[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
