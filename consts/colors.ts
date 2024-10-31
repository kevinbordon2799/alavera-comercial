const colors = {
    fullWhite: "#fff",
    orange: "rgb(255, 153, 0)",
    rgbaOrange(opacity: number) {
        return `rgba(255, 153, 0, ${opacity})`;
    },
    // gray: "#272a31",
    gray: "#1c1c1c",
    mediumGray: "#202020",
    darkGray: "rgb(20, 20, 20)",
    rgbaDarkGray(opacity: number) {
        return `rgba(20, 20, 20, ${opacity})`;
    },
    facebook: "#0035a5",
    instagram: "#ff007d",
}

export default colors;