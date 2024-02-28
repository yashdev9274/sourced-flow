import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  isMobile?: boolean;
}

const Logo = ({ isMobile }: LogoProps) => {
  return (
    <Link href={'/'}>
      <div className="flex  items-center">
        <div className="flex justify-center items-center">
          <Image
            src="/assets/vercel-logo.png"
            alt="Logo"
            width={30}
            height={34}
            className="sm:w-[30px] w-[21px] h-[25px] sm:h-[30px] mt-1"
          />
        </div>
        {!isMobile ? (
          <span className="font-bold shadows text-xl text-[32px] sm:text-[35px]">
            SoFlow.
          </span>
        ) : null}
      </div>
    </Link>
  );
};

export default Logo;