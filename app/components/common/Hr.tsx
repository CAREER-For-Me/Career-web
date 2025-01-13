interface Hrprops {
  mt: number;
  my: number;
}

const Hr = ({ mt, my }: Hrprops) => {
  return (
    <>
      <div className={`bg-gray-medium h-[0.5px] mt-${mt} my-${my}`} />
    </>
  );
};

export default Hr;
