window.addEventListener("DOMContentLoaded", (event) => {
  let typeSplit = new SplitType("[text-split]", {
    types: "words, chars",
    tagName: "span"
  });

  function createScrollTrigger(triggerElement, timeline) {
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 60%",
      onEnter: () => timeline.play()
    });
  }
  ScrollTrigger.defaults({ scroller: ".scroll-container" });

  $("[anim-1]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".word"), {opacity: 0, yPercent: 100, duration: 1, ease: "back.out(2)", stagger: {amount: 0.5 } });
    createScrollTrigger($(this), tl);
  })

  $("[anim-2]").each(function (index) {
    let tl = gsap.timeline({ paused: true, delay: 0.8 });
    tl.from($(this).find(".char"), {opacity: 0, x: 1, duration: 0.05, ease: "power0.out", stagger: {amount: 2 } });
    createScrollTrigger($(this), tl);
  })

  $("[anim-3]").each(function (index) {
    let tl = gsap.timeline({ paused: true, delay: 1.5 });
    tl.from($(this).find(".char"), {color: "#fff", duration: 0.6, ease: "power1.out", stagger: {amount: 0.6 } });
    createScrollTrigger($(this), tl);
  })

  $("[anim-4]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".word"), {opacity: 0, yPercent: -100, duration: 0.5, ease: "power2.out", stagger: {amount: 0.5 } });
    createScrollTrigger($(this), tl);
  })

  $("[anim-5]").each(function (index) {
    let tl = gsap.timeline({ paused: true, delay: 1 });
    tl.from($(this), {opacity: 0, x: 1, duration: 1.5, ease: Elastic.easeOut.config(2, 0.6) });
    createScrollTrigger($(this), tl);
  })

  $("[anim-6]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), {opacity: 0, x: 1, duration: 0.1, ease: "power0.out", stagger: {amount: 1} });
    createScrollTrigger($(this), tl);
  })


  gsap.set("[text-split]", {opacity: 1});
});
