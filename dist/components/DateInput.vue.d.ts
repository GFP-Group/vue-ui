type __VLS_Props = {
    placeholder?: string;
    value?: string;
    valueStartDate?: string;
    valueEndDate?: string;
    solid?: boolean;
    darkLighter?: boolean;
    darkDarker?: boolean;
    error?: boolean;
    success?: boolean;
    onChange?: (value: string | {
        startDate: string | null;
        endDate: string | null;
    }) => void;
    range?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    change: (value: string | {
        startDate: string | null;
        endDate: string | null;
    }) => any;
    "update:value": (value: string) => any;
    "update:valueStartDate": (value: string | null) => any;
    "update:valueEndDate": (value: string | null) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((value: string | {
        startDate: string | null;
        endDate: string | null;
    }) => any) | undefined;
    "onUpdate:value"?: ((value: string) => any) | undefined;
    "onUpdate:valueStartDate"?: ((value: string | null) => any) | undefined;
    "onUpdate:valueEndDate"?: ((value: string | null) => any) | undefined;
}>, {
    placeholder: string;
    darkDarker: boolean;
    range: boolean;
    darkLighter: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
