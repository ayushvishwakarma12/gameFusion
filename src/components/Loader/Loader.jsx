import Lottie from "react-lottie";
import loading from "../../lotties/loading.json";

const Loading = () => {
  const lottieSettings = {
    loop: true,
    autoplay: true,
    animationData: loading,
  };
  return <Lottie options={lottieSettings} height={300} width={300} />;
};

export default Loading;
