type Option = string | {
    label: string;
    value: string | number;
};
type RadioGroupSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type __VLS_Props = {
    options?: Option[];
    modelValue?: string | number;
    className?: string;
    disabled?: boolean;
    size?: RadioGroupSize;
    onChange?: (value: string | number) => void;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    change: (value: string | number) => any;
    "update:modelValue": (value: string | number) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((value: string | number) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}>, {
    size: RadioGroupSize;
    disabled: boolean;
    options: Option[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
