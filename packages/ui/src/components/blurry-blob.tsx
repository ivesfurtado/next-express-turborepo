import { cn } from "@monorepo/utils/styles";

interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
  firstBlobColor: string;
  secondBlobColor: string;
}

const BlurryBlob = ({
  className,
  firstBlobColor,
  secondBlobColor,
}: BlobProps) => {
  return (
    <div className="flex flex-1 h-full min-h-52 min-w-52 items-center justify-center">
      <div className="flex flex-1 h-full relative w-full">
        <div
          className={cn(
            "absolute -right-24 -top-28 h-72 w-72 animate-pop-blob rounded-sm bg-blue-400 p-8 opacity-5 blur-3xl filter",
            className,
            firstBlobColor
          )}
        />
        <div
          className={cn(
            "absolute -left-40 -top-64 h-72 w-72 animate-pop-blob rounded-sm bg-purple-400 p-8 opacity-5 blur-3xl filter",
            className,
            secondBlobColor
          )}
        />
      </div>
    </div>
  );
};

export default BlurryBlob;
