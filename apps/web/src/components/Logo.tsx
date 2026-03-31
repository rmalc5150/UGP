import Image from 'next/image';

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
};

export default function Logo({ className = '', width = 160, height = 61 }: LogoProps) {
  return (
    <Image
      src="/ugp logo.png"
      alt="Untitled Garment Project"
      width={width}
      height={height}
      className={className}
    />
  );
}
