import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const PageSkeleton = () => {
  return (
    <div role="presentation" style={{ width: "30rem", textAlign: "left" }}>
      <Skeleton count={1} />
      <Skeleton count={2} width={"20rem"} />
      <br />
      <Skeleton count={3} width={"15rem"} />
      <Skeleton count={2} width={"25rem"} />
    </div>
  );
};
