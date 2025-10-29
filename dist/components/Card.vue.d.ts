type __VLS_Props = {
    title?: string;
    titleType?: 'title' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    class?: string;
    darkDarker?: boolean;
    disableBlockAppearanceMobile?: boolean;
    collapsible?: boolean;
};
declare var __VLS_4: {}, __VLS_21: {};
type __VLS_Slots = {} & {
    actions?: (props: typeof __VLS_4) => any;
} & {
    default?: (props: typeof __VLS_21) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    titleType: "title" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    darkDarker: boolean;
    disableBlockAppearanceMobile: boolean;
    collapsible: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
