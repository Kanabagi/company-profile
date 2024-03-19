const TitleSection = (props: any) => {
  const { title } = props;
  return (
    <section className="bg-hero bg-cover bg-center w-full h-[150px] md:h-[200px] flex items-center">
      <span className="wrapper font-bold text-blue-800 text-[24px] sm:text-[30px] md:text-[40px]">{title}</span>
    </section>
  );
};

export default TitleSection;
