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
    paused(value: boolean): void;
  }
}

