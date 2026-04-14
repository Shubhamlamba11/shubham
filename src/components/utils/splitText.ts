import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "./FreeSplitText";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  split?: SplitText;
}

gsap.registerPlugin(ScrollTrigger);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;
  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");

  paras.forEach((para) => {
    if (para.anim) {
      para.anim.kill();
      para.split?.revert();
    }

    para.split = new SplitText(para, {
      type: "lines,words,chars",
    });

    para.anim = gsap.from(para.split.chars, {
      scrollTrigger: {
        trigger: para,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
      opacity: 0,
      stagger: 0.1,
    });
  });
}
