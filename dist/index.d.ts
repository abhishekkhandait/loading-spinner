declare class LoadingSpinner extends HTMLElement {
    static readonly observedAttributes: string[];
    private _styles;
    private mainDiv;
    private content;
    constructor();
    private createSpinner;
}
