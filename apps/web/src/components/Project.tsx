import Image from 'next/image';

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
};

export default function Logo({ className = '', width = 2048, height = 388 }: LogoProps) {
  return (
    <Image
      src="/project_cropped.png"
      alt="Garment"
      width={width}
      height={height}
      className={className}
    />
  );
}
