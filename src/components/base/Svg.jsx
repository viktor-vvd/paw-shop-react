import sprite from "@public/sprite.svg";

const Svg = ({ name, ...props }) => {
  console.log();
  return (
    <svg {...props}>
      <use href={`${sprite}#${name}`} />
    </svg>
  );
};

export default Svg;
