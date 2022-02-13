import { toast } from "react-toastify";

const errorResponseHandler = (error) => {
  if (error) {
    let message;

    if (error.response) {
      if (error.response.status === 500) message = "Something went wrong";
      else message = error.response.data.message;

      console.log(message);

      toast.error(message);
    }
  }
};

export default errorResponseHandler;
