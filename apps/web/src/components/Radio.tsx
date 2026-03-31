import Image from 'next/image';

type RadioProps = {
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
};

export default function Radio({
  className = '',
  width,
  height,
  fill: fillMode = false,
}: RadioProps) {
  if (fillMode) {
    return (
      <Image src="/Risograph-Grid.png" alt="" fill className={`object-cover ${className} -mx-px`} />
    );
  }

  return (
    <Image
      src="/Risograph-Grid.png"
      alt="Risograph Grid"
      width={width ?? 1536}
      height={height ?? 914}
      className={className}
    />
  );
}
