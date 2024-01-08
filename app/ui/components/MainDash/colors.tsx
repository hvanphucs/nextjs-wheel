export const colorPaletteWithArray = {
  rainbow: [
    "#FF0000", // red
    "#FFA500", // orange
    "#FFFF00", // yellow
    "#00FF00", // green
    "#0000FF", // blue
    "#9400D3", // indigo (Violet)
    "#800080", // violet
  ],
  candy: [
    "#FF69B4", // pinkBubblegum
    "#98FB98", // pastelGreen
    "#FF6347", // peach
    "#FFFACD", // lemonYellow
  ],
  tropical: [
    "#FC8EAC", // flamingoPink
    "#87CEEB", // skyBlue
    "#FFD700", // sunYellow
    "#FF8243", // peach
  ],
  galactic: [
    "#0047AB", // cobaltBlue
    "#000000", // deepBlack
    "#4B0082", // deepPurple
    "#C0C0C0", // silver
  ],
  popArt: [
    "#FF3E4D", // poppyRed
    "#FFEF00", // canaryYellow
    "#98FF98", // mintGreen
    "#0047AB", // cobaltBlue
  ],
};

export const getColorByIndex = (index: number, palette: string[]) => {
  const validIndex =
    ((index % palette.length) + palette.length) % palette.length;
  return palette[validIndex];
};
