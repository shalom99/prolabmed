export default function Accredited() {
  return (
    <div className="w-full pt-[50px] pb-10 lg:pb-[50px] lg:pt-[100px] bg-primarybg ">
      <h1 className="text-xl md:text-4xl text-primary font-semibold text-center">
        Accredited HMOs
      </h1>
      <p className="text-center text-sm">
        Click on your insurance provider below to see the list of accredited
        branches.
      </p>
      <div className="md:w-[80%] xl:w-[70%] 2xl:w-[60%] md:pt-5 2xl:pt-10 mx-auto grid grid-cols-2 md:grid-cols-4 justify-items-center items-center">
        <div className="w-[150px] h-[150px] xl:w-[200px] xl:h-[200px] bg-carehealth bg-contain bg-no-repeat bg-center"></div>
        <div className="w-[150px] h-[150px] xl:w-[200px] xl:h-[200px] bg-getwell bg-contain bg-no-repeat bg-center"></div>
        <div className="w-[150px] h-[150px] xl:w-[200px] xl:h-[200px] bg-inlife bg-contain bg-no-repeat bg-center"></div>
        <div className="w-[150px] h-[150px] xl:w-[200px] xl:h-[200px] bg-wellcare bg-contain bg-no-repeat bg-center"></div>
      </div>
    </div>
  );
}
