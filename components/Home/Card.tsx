type CardProps = {
  image: string;
  title: string;
  desc: string;
  height: string;
};

const Card = (props: CardProps) => {
  const { image, title, desc, height } = props;
  return (
    <div className="group relative cursor-pointer overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-xl hover:shadow-black/30">
      <div className="h-[300px] w-[300px] rounded-t-3xl overflow-hidden">
        <div className="h-full w-full bg-cover transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${image})` }}></div>
      </div>
      <div className={`bg-gray-200/85 ${height} text-gray-950 pb-[20px] rounded-t-3xl absolute inset-0 flex translate-y-[250px] flex-col items-center justify-center px-2  transition-all duration-500 group-hover:translate-y-[180px]`}>
        <h1 className="text-3xl font-semibold  pt-4">{title}</h1>
        <p className="mb-3 text-justify text-md  opacity-0 pb-4 transition-opacity duration-300 group-hover:opacity-100">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
