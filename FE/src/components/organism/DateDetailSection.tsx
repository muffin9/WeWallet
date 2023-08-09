import {
  TransActionDetailDataType,
  TransDetailInfoType,
} from '@/types/transaction';

interface DateDetailSectionProps {
  transActionDetailData: TransActionDetailDataType;
  handleClickDetailInfo: (id: number) => void;
}

const DateDetailSection = ({
  transActionDetailData,
  handleClickDetailInfo,
}: DateDetailSectionProps) => {
  return (
    <section className="flex flex-col w-72">
      <header className="flex flex-col">
        <div className="flex justify-between">
          <h2 className="font-bold text-lg">{transActionDetailData.day}일</h2>
          <span>X</span>
        </div>
        <div className="flex justify-between">
          <span>총 {transActionDetailData.detailInfos.length || 0}건</span>
          <span>-{transActionDetailData.totalPrice}원</span>
        </div>
      </header>
      <div className="my-2 h-px bg-silver" />
      <div>
        {transActionDetailData.detailInfos.map(
          (detailInfo: TransDetailInfoType) => {
            return (
              <div
                className="flex gap-4 mt-4 items-center cursor-pointer"
                onClick={() => handleClickDetailInfo(detailInfo.id)}
                key={`detail-info-${detailInfo.id}`}
              >
                <img
                  width={32}
                  height={32}
                  src={`${process.env.API_URL}/${detailInfo.category.image_url}`}
                  alt="category image"
                />
                <div className="flex flex-col">
                  <div>{detailInfo.account || '없음'}</div>
                  <span className="text-xs">{detailInfo.category.name}</span>
                </div>
                <div className="ml-auto">
                  {detailInfo.type === 'INCOME' ? '+' : '-'}
                  {detailInfo.price}원
                </div>
              </div>
            );
          },
        )}
      </div>
    </section>
  );
};

export default DateDetailSection;
