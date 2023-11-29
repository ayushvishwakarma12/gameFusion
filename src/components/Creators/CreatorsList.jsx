import CreatorItem from "./CreatorItem";

const CreatorsList = ({ creators }) => {
  return (
    <div className="text-center pt-[100px] p-[20px] lg:p-[100px] pb-0 lg:pb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16">
        {creators?.map((item) => {
          return <CreatorItem key={item?.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default CreatorsList;
