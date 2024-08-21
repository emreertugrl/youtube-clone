const Error = ({ message }) => {
  return (
    <div className=" mt-44 mx-auto h-fit p-4 rounded bg-red-500 flex flex-col gap-5">
      <p>Üzgünüz bir hata oluştu lütfen sonra tekrar deneyiniz.</p>
      <h2 className="font-semibold">{message}</h2>
    </div>
  );
};

export default Error;
