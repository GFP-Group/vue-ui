type __VLS_Props = {
    currentPage?: number;
    totalPages?: number;
    totalItems?: number;
    pageSize?: number;
    maxVisible?: number;
    className?: string;
    align?: 'left' | 'center' | 'right';
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    change: (page: number) => any;
    "update:currentPage": (page: number) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((page: number) => any) | undefined;
    "onUpdate:currentPage"?: ((page: number) => any) | undefined;
}>, {
    className: string;
    currentPage: number;
    totalPages: number;
    totalItems: number;
    pageSize: number;
    maxVisible: number;
    align: "left" | "center" | "right";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
