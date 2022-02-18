import IcLoading from "assets/images/icons/loading-elipsis.svg";

export default function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 vh-100">
      <img src={IcLoading} alt={IcLoading} />
    </div>
  );
}
