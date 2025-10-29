type ButtonKind = 'primary' | 'default' | 'danger' | 'warning' | 'success';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type __VLS_Props = {
    buttons: {
        label: string;
        onClick?: () => void;
        type?: ButtonKind;
        size?: ButtonSize;
    }[];
    className?: string;
    collapseBelowPx?: number;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    className: string;
    collapseBelowPx: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
