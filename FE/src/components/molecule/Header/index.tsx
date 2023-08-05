import Image from 'next/image';
import LogoComponent from '@/assets/images/logo.png';
import { SVGIcon } from '@/components/atoms/Icon';

import { bellImagePath, moreImagePath, searchImagePath } from '@/constants/url';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  return (
    <header className="flex justify-between items-center p-4">
      <div className="cursor-pointer">
        <Image
          src={LogoComponent}
          width={25}
          height={25}
          alt="Wewallet Logo"
          onClick={() => router.push('/main')}
        />
      </div>
      <div className="flex gap-x-4">
        <SVGIcon
          width={24}
          height={24}
          d={searchImagePath}
        />
        <SVGIcon
          width={24}
          height={24}
          d={bellImagePath}
        />
        <SVGIcon
          width={24}
          height={24}
          d={moreImagePath}
        />
      </div>
    </header>
  );
};

export default Header;
