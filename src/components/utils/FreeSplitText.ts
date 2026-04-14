export class SplitText {
  elements: HTMLElement[] = [];
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];
  originalContent: Map<HTMLElement, string> = new Map();

  constructor(target: any, vars: { type: string; linesClass?: string }) {
    const selector = typeof target === "string" ? target : null;
    let targets: HTMLElement[] = [];

    if (selector) {
      targets = Array.from(document.querySelectorAll(selector));
    } else if (Array.isArray(target)) {
      targets = target.flatMap((t) =>
        typeof t === "string" ? Array.from(document.querySelectorAll(t)) : [t]
      );
    } else if (target instanceof HTMLElement) {
      targets = [target];
    }

    this.elements = targets;
    const types = vars.type.split(",");

    targets.forEach((el) => {
      this.originalContent.set(el, el.innerHTML);
      const text = el.innerText;
      el.innerHTML = "";

      if (types.includes("lines") || types.includes("words") || types.includes("chars")) {
        // Simple word/char split implementation
        const words = text.split(" ");
        words.forEach((wordText, i) => {
          const wordSpan = document.createElement("span");
          wordSpan.style.display = "inline-block";
          wordSpan.className = "split-word";
          
          if (types.includes("chars")) {
            wordText.split("").forEach((char) => {
              const charSpan = document.createElement("span");
              charSpan.style.display = "inline-block";
              charSpan.className = "split-char";
              charSpan.innerText = char;
              wordSpan.appendChild(charSpan);
              this.chars.push(charSpan);
            });
          } else {
            wordSpan.innerText = wordText;
          }

          el.appendChild(wordSpan);
          this.words.push(wordSpan);
          
          if (i < words.length - 1) {
            el.appendChild(document.createTextNode(" "));
          }
        });
      }
    });
  }

  revert() {
    this.elements.forEach((el) => {
      const original = this.originalContent.get(el);
      if (original !== undefined) {
        el.innerHTML = original;
      }
    });
  }
}
