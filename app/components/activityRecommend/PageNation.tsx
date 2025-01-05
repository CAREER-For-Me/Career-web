// 페이지네이션
const PageNation = () => {
  return (
    <div className="join flex justify-center mt-20">
      <button className="join-item btn">«</button>

      <button className="join-item btn btn-active">1</button>
      <button className="join-item btn">2</button>
      <button className="join-item btn">3</button>
      <button className="join-item btn">4</button>

      <button className="join-item btn">»</button>
    </div>
  );
};

export default PageNation;
