export const CommonHeading = ({ h, p,width }) => {
  return (
    <>
      <div className="flex flex-col gap-3 pb-6">
        <h2 className="text-3xl font-medium md:text-4xl ">{h}</h2>
        <p className={`text-lg text-paracolor md:${ width=="full" ?"w-full":"w-1/2"}` }>{p}</p>
      </div>
    </>
  );
};
export default CommonHeading
