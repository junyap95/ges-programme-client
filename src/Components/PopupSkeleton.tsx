import Skeleton from "react-loading-skeleton";

export default function PopupSkeleton() {
  return (
    <>
      <Skeleton containerClassName="flex-1" count={1} baseColor="rgba(51, 128, 252, 0.3)" />
      <Skeleton
        containerClassName="flex-1"
        count={1}
        circle={true}
        height={"8rem"}
        width={"8rem"}
        baseColor="rgba(51, 128, 252, 0.2)"
      />
      <div className="flex-1">
        <Skeleton
          containerClassName="flex-1"
          count={1}
          height={"3em"}
          baseColor="rgba(51, 128, 252, 0.3)"
        />
        <br />
        <Skeleton containerClassName="flex-1" count={1} baseColor="rgba(51, 128, 252, 0.3)" />
      </div>
    </>
  );
}
