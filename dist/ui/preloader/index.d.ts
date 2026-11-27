export const preloaderState: {
    show: boolean;
    label: string;
};
export default preloader;
declare namespace preloader {
    function init(): void;
    function show(label?: string): void;
    function setStage(label: any): void;
    function hide(): void;
}
