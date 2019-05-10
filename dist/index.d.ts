declare class LoadingSpinner extends HTMLElement {
    static readonly observedAttributes: string[];
    private _styles;
    private mainDiv;
    private content;
    private styles;
    private scale;
    constructor();
    connectedCallback(): void;
    private createSpinner;
}
