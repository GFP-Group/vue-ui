type __VLS_Props = {
    label: string;
    className?: string;
    onClick?: (e: MouseEvent) => void;
    labelSizeSm?: string;
    labelSizeMd?: string;
    labelSizeLg?: string;
    labelSizeXl?: string;
    labelSize2xl?: string;
};
declare var __VLS_5: {
    iconClass: string;
    size: number;
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_5) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    labelSizeSm: string;
    labelSizeMd: string;
    labelSizeLg: string;
    labelSizeXl: string;
    labelSize2xl: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
