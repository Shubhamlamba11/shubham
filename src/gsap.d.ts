declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(element: any, vars?: any);
    chars: any[];
    words: any[];
    lines: any[];
    revert(): void;
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    static create(vars: any): ScrollSmoother;
    static refresh(value?: boolean): void;
    static get(): ScrollSmoother;
    paused(value?: boolean | any): any;
    scrollTo(target: any, isPrecise?: boolean, position?: string): void;
    scrollTop(value?: number): any;
    getVelocity(): number;
    kill(): void;
  }
}


