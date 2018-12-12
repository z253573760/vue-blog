export function smoothScroll() {
  const currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(smoothScroll);
    window.scrollTo(0, currentScroll - currentScroll / 5);
  }
}