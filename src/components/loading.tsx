import SyncLoader from "react-spinners/SyncLoader";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 flex h-screen w-screen items-center justify-center bg-black/50">
      <SyncLoader size={30} />
    </div>
  );
};

export default Loading;
