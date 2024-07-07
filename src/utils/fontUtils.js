function stripUnit(value) {
    return parseFloat(value);
}

export function fluidType(minVw, maxVw, minFontSize, maxFontSize) {
    const minVwValue = stripUnit(minVw);
    const maxVwValue = stripUnit(maxVw);
    const minFontSizeValue = stripUnit(minFontSize);
    const maxFontSizeValue = stripUnit(maxFontSize);

    return {
        fontSize: `${minFontSizeValue}px`,
        [`@media screen and (min-width: ${minVw})`]: {
            fontSize: `${minFontSizeValue + ((maxFontSizeValue - minFontSizeValue) * (100 - minVwValue)) / (maxVwValue - minVwValue)}px`,
        },
        [`@media screen and (min-width: ${maxVw})`]: {
            fontSize: `${maxFontSizeValue}px`,
        },
    };
}

export const rem = (pxValue) => {
    return `${pxValue / 16}rem`;
};
