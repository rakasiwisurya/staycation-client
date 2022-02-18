import { useHistory } from "react-router-dom";
import IcNotFound from "assets/images/icons/underconstruction.svg";
import Button from "elements/Button";

export default function NotFound() {
  const history = useHistory();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 vh-100">
      <img src={IcNotFound} alt={IcNotFound} className="mb-4" width={400} />
      <div className="w-25 text-center">
        <h1 className="h5 mb-4">
          The page which you looking for is not found or under construction
        </h1>
      </div>
      <Button
        className="btn px-5"
        type="button"
        onClick={() => history.goBack()}
        isLight
      >
        Back
      </Button>
    </div>
  );
}
