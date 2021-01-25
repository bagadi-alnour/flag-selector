const randomizeColors = () => {
  $(".color:nth-child(1)").addClass(
    `color-${Math.floor(Math.random() * 3) + 1}`
  ) +
    $(".color:nth-child(2)").addClass(
      `color-${Math.floor(Math.random() * 3) + 1}`
    ) +
    $(".color:nth-child(3)").addClass(
      `color-${Math.floor(Math.random() * 3) + 1}`
    );
};
export default randomizeColors;
