var numb;
if (window.innerHeight / window.innerWidth === 0.6) {
    numb = window.innerWidth / 1000;
} else if (window.innerHeight / window.innerWidth > 0.6) {
    numb = window.innerWidth / 1000;
} else if (window.innerHeight / window.innerWidth < 0.6) {
    numb = window.innerHeight / 600;
}
export const flex = numb;