type NavItem = {
    label?: string;
    value?: string;
    onClick?: (value?: string, item?: NavItem) => void;
};
type __VLS_Props = {
    items: NavItem[];
    activeRoute?: string;
    className?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    select: (value: string, item?: NavItem | undefined) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: ((value: string, item?: NavItem | undefined) => any) | undefined;
}>, {
    className: string;
    activeRoute: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
