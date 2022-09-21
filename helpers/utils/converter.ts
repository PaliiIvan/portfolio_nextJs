export const remToPx = (rem: number | string) => {
    const body = document.querySelector('body');

    if (body) {
        const numberRem = parseFloat(rem.toString());
        const docFontSize = parseInt(window.getComputedStyle(body).fontSize);

        return docFontSize * numberRem;
    }

    return 0;

}