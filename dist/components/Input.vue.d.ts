type InputType = 'text' | 'email' | 'date' | 'number' | 'password' | 'search';
type __VLS_Props = {
    type?: InputType;
    value?: string | number;
    placeholder?: string;
    solid?: boolean;
    darkLighter?: boolean;
    darkDarker?: boolean;
    error?: boolean;
    success?: boolean;
    className?: string;
    onChange?: (e: globalThis.Event) => void;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {
    focus: () => void | undefined;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    change: (ev: Event) => any;
    "update:value": (value: string | number | undefined) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((ev: Event) => any) | undefined;
    "onUpdate:value"?: ((value: string | number | undefined) => any) | undefined;
}>, {
    className: string;
    type: InputType;
    onChange: (e: globalThis.Event) => void;
    placeholder: string;
    darkDarker: boolean;
    value: string | number;
    darkLighter: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
