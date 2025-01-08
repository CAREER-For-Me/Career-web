interface Hrprops {
  mt?: number;
  mb: number;
}

const Hr = ({ mt, mb }: Hrprops) => {
  return (
    <>
      <div className={`bg-gray-medium h-[0.5px] mt-${mt} mb-${mb}`} />
    </>
  );
};

export default Hr;
