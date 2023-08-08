import Header from '@/components/molecule/Header';
import WalletSection from '@/components/organism/WalletSection';

const budget = () => {
  return (
    <section className="w-80 h-full flex flex-col gap-y-12 bg-light-black">
      <Header />
      <WalletSection currentPage="budget" />
    </section>
  );
};

export default budget;
