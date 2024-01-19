import modalImage from '@/assets/images/assign-modal.png';
import Image from 'next/image';

const TransferConfirmationModal = ({
  showConfirmationModal,
  setShowConfirmationModal,
  selected,
  handleTransfer,
}: {
  showConfirmationModal: boolean;
  setShowConfirmationModal: (show: boolean) => void;
  selected: string;
  handleTransfer: () => void;
}) => {
  return (
    <>
      {showConfirmationModal && (
        <div className='absolute 2xl:left-[-1450px] xl:left-[-1080px] lg:left-[-830px] md:left-[-575px] sm:left-[-350px] inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50'>
          <div className='w-[404px] h-[377px] bg-white rounded-[12px] overflow-hidden border border-solid border-gray-200'>
            <div className='relative w-[347px] h-[320px] top-[25px] left-[35px]'>
              <div className='absolute w-[20px] h-[20px] top-0 left-[327px]'>
                <div
                  onClick={() => setShowConfirmationModal(false)}
                  className='flex flex-col w-[20px] items-start justify-center p-[3px] relative rounded-[3px] overflow-hidden cursor-pointer'>
                  <p className='!relative !w-[14px] !h-[14px]'>X</p>
                </div>
              </div>
              <div className='absolute w-[334px] h-[305px] top-[15px] left-0'>
                <div className='absolute w-[336px] h-[136px] top-[169px] left-0'>
                  <p className='absolute w-[334px] top-0 left-0 font-semibold text-wrap text-[#131212] text-[20px] text-center tracking-[0] leading-[31.2px]'>
                    Are you sure you want to transfer the assignee to {selected}?
                  </p>
                  <div className='inline-flex items-start gap-[12px] absolute top-[86px] left-[18px]'>
                    <div
                      onClick={() => setShowConfirmationModal(false)}
                      className='flex w-[135px] items-center justify-center gap-[15px] px-[51px] py-[18px] relative bg-white rounded-[8px] overflow-hidden border border-solid border-[#dfdfdf] cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1.5 hover:scale-200'>
                      <div className='relative w-fit mt-[-1.00px] ml-[-6.50px] mr-[-6.50px] font-medium text-[#858585] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap'>
                        Cancel
                      </div>
                    </div>
                    <div
                      onClick={handleTransfer}
                      className='inline-flex items-center gap-[15px] px-[51px] py-[18px] relative flex-[0_0_auto] bg-[#5630FF] rounded-[8px] overflow-hidden cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1.5 hover:scale-200'>
                      <div className='relative w-fit mt-[-1.00px] font-medium text-white text-[14px] tracking-[0] leading-[normal] whitespace-nowrap'>
                        Tranfer
                      </div>
                    </div>
                  </div>
                </div>
                <div className='absolute w-[185px] h-[148px] top-0 left-[74px]'>
                  <Image src={modalImage} alt='error' />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TransferConfirmationModal;
