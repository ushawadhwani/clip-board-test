import ToastServive from "react-material-toast";

const toast = ToastServive.new({
  place: "bottomRight",
  duration: 2,
  maxCount: 10,
});

export default toast;
