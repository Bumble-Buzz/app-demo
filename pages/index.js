import { useRouter } from 'next/router';
import Image from 'next/image';
import ContentWrapper from '@/components/wrappers/ContentWrapper';
import ButtonWrapper from '@/components/wrappers/ButtonWrapper';
import Lexicon from '@/lexicon/index';
import Tooltip from '@/components/Tooltip';
import ImageGalleryStyles from 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';



export default function Home() {
  const ROUTER = useRouter();

  const COMMISSION_TEXT_STYLE = 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700';
  const INCENTIVE_TEXT_STYLE = 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700';

  const images = [
    {
      original: '/art/personal_1.png',
      thumbnail: '/art/personal_1.png',
    },
    {
      original: '/art/personal_2.png',
      thumbnail: '/art/personal_2.png',
    },
    {
      original: '/art/personal_5.png',
      thumbnail: '/art/personal_5.png',
    },
    {
      original: '/art/personal_6.png',
      thumbnail: '/art/personal_6.png',
    },
  ];

  return (
    // bg-gradient-to-b from-gray-500 to-gray-900
    // bg-[url('/art/stars.jpg')]
    <ContentWrapper classes="items-center text-center justify-center">
      {/* Page Content */}
      <div className="flex flex-wrap items-center text-center justify-center relative z-10">

          <div className="py-1 px-1 flex flex-col items-center text-center justify-center w-full">

            {/* main landing area */}
            <div className='py-10 flex flex-wrap sm:flex-nowrap flex-row items-center text-center justify-between w-full'>
              {/* left */}
              <div className='flex flex-col items-center text-center justify-center w-full'>
                <p className='text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl'>The Future of <span className='text-indigo-600'>NFT TRADING</span> is Here!</p>
              </div>
              {/* right */}
              <div className='flex flex-col items-center text-center justify-center w-full'>
                <div className='relative w-64 xsm:w-80'>
                  {/* <Image src={'/art/personal_6.png'} layout="responsive" sizes="50vw" width="64" height="64" /> */}
                  <ImageGallery
                    className={ImageGalleryStyles} items={images} lazyLoad={true} showThumbnails={true}
                    showPlayButton={false} showFullscreenButton={false} useBrowserFullscreen={false}
                    />
                </div>


              </div>
            </div>

            <div className='py-2 w-full'>
              <p className='text-xl md:text-7xl text-gray-200'>Commissions</p>
            </div>

            <div className='py-2 pb-6 w-full max-w-md md:max-w-7xl'>
              <p className='text-sm text-gray-200'>
                <span>There are many ways to collect commission on BumbleBuzz. This is to help creators earn rewards for their hard work.</span>
                <br />
                <span>Given a successful sale, the commission comes from the final sale price and is distributed amongst the creators.</span>
              </p>
            </div>

            <div className='py-2 w-full'>
              <ButtonWrapper
                onClick={() => ROUTER.push('/')}
                classes={`max-w-xs ${COMMISSION_TEXT_STYLE}`}
              >
                <p className='h-fit sm:h-40'>
                  <span className='text-lg text-indigo-600'>Artist Commission</span>
                  <br />
                  <span className=''>All NFTs created through BumbleBuzz are eligible for the artist commission. The artists will have the option to set the commission percentage during the creation process. Every time an NFT is sold the creator of the NFT will receive the artist commission.</span>
                </p>
              </ButtonWrapper>
              <ButtonWrapper
                onClick={() => ROUTER.push('/')}
                classes={`max-w-xs ${COMMISSION_TEXT_STYLE}`}
              >
                <p className='h-fit sm:h-40'>
                  <span className='text-lg text-indigo-600'>Collection Commission</span>
                  <br />
                  <span className=''>Collection owners will have the option to turn on collection commission.</span>
                  <br />
                  <span className=''>Collection owners will receive the set collection commission every time an NFT from that collection is sold.</span>
                </p>
              </ButtonWrapper>
              <ButtonWrapper
                onClick={() => ROUTER.push('/')}
                classes={`max-w-xs ${COMMISSION_TEXT_STYLE}`}
              >
                <p className='h-fit sm:h-40'>
                  <span className='text-lg text-indigo-600'>Collection Reflection</span>
                  <br />
                  <span className=''>Collection owners have the ability to enable the reflection commission, which will result in all NFT owners earning rewards every time an NFT is sold associated with that collection.</span>
                </p>
              </ButtonWrapper>
              <ButtonWrapper
                onClick={() => ROUTER.push('/')}
                classes={`max-w-xs ${COMMISSION_TEXT_STYLE}`}
              >
                <p className='h-fit sm:h-40'>
                  <span className='text-lg text-indigo-600'>Marketplace Commission</span>
                  <br />
                  <span className=''>Marketplace commission is a standard 2% from the final sale price.</span>
                </p>
              </ButtonWrapper>
            </div>

            <div className='py-2 w-full'>
              <p className='text-xl md:text-7xl text-gray-200'>Incentives</p>
            </div>

            <div className='py-2 pb-6 w-full max-w-md md:max-w-7xl'>
              <p className='text-sm text-gray-200'>
                <span>BubbleBuzz allows creators and collectors to receive incentives to help users grow. </span>
                <br />
                <span>There are two types of incentives: marketplace incentives and collection-specific incentives.</span>
              </p>
            </div>

            <div className='py-2 w-full'>
              <ButtonWrapper
                onClick={() => ROUTER.push('/')}
                classes={`max-w-xs ${INCENTIVE_TEXT_STYLE}`}
              >
                <p className='h-fit sm:h-40'>
                  <span className='text-lg text-indigo-600'>Marketplace Incentives</span>
                  <br />
                  <span className=''>Marketplace incentive is in place to counter the marketplace commission, reducing or eliminating them.</span>
                </p>
              </ButtonWrapper>
              <ButtonWrapper
                onClick={() => ROUTER.push('/')}
                classes={`max-w-xs ${INCENTIVE_TEXT_STYLE}`}
              >
                <p className='h-fit sm:h-40'>
                  <span className='text-lg text-indigo-600'>Collection Incentive</span>
                  <br />
                  <span className=''>NFT buyers will receive the set collection incentive every time an NFT from that collection is sold. The collection incentive is funded from the collection incentive pool. This reward will help buyers counter against the collection commission.</span>
                </p>
              </ButtonWrapper>
            </div>

            {/* <div className='flex flex-wrap items-center text-center justify-center w-full max-w-3xl'> */}

              {/* commissions */}
              {/* <div className={`w-full text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-gray-700`}>
                <p className='pb-2 text-3xl text-indigo-600'>BumbleBuzz Commissions</p>
                <p className='pb-6 text-sm'>There are many ways to collect commission on BumbleBuzz. This is to help creators earn rewards for their hard work. Given a successful sale, the commission comes from the final sale price and is distributed amongst the creators.</p>

                <ButtonWrapper
                  onClick={() => ROUTER.push('/')}
                  classes={`max-w-xs ${COMMISSION_TEXT_STYLE}`}
                >
                  <p className='h-fit sm:h-40'>
                    <span className='text-lg text-indigo-600'>Artist Commission</span>
                    <br />
                    <span className=''>All NFTs created through BumbleBuzz are eligible for the artist commission. The artists will have the option to set the commission percentage during the creation process. Every time an NFT is sold the creator of the NFT will receive the artist commission.</span>
                  </p>
                </ButtonWrapper>
                <ButtonWrapper
                  onClick={() => ROUTER.push('/')}
                  classes={`max-w-xs ${COMMISSION_TEXT_STYLE}`}
                >
                  <p className='h-fit sm:h-40'>
                    <span className='text-lg text-indigo-600'>Collection Commission</span>
                    <br />
                    <span className=''>Collection owners will have the option to turn on collection commission.</span>
                    <br />
                    <span className=''>Collection owners will receive the set collection commission every time an NFT from that collection is sold.</span>
                  </p>
                </ButtonWrapper>
                <ButtonWrapper
                  onClick={() => ROUTER.push('/')}
                  classes={`max-w-xs ${COMMISSION_TEXT_STYLE}`}
                >
                  <p className='h-fit sm:h-40'>
                    <span className='text-lg text-indigo-600'>Collection Reflection</span>
                    <br />
                    <span className=''>Collection owners have the ability to enable the reflection commission, which will result in all NFT owners earning rewards every time an NFT is sold associated with that collection.</span>
                  </p>
                </ButtonWrapper>
                <ButtonWrapper
                  onClick={() => ROUTER.push('/')}
                  classes={`max-w-xs ${COMMISSION_TEXT_STYLE}`}
                >
                  <p className='h-fit sm:h-40'>
                    <span className='text-lg text-indigo-600'>Marketplace Commission</span>
                    <br />
                    <span className=''>Marketplace commission is a standard 2% from the final sale price.</span>
                  </p>
                </ButtonWrapper>
              </div> */}

              {/* incentives */}
              {/* <div className={`w-full text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-gray-700`}>
                <p className='pb-2 text-3xl text-indigo-600'>BumbleBuzz Incentives</p>

                <ButtonWrapper
                  onClick={() => ROUTER.push('/')}
                  classes={`max-w-xs ${INCENTIVE_TEXT_STYLE}`}
                >
                  <p className='h-fit sm:h-40'>
                    <span className='text-lg text-indigo-600'>Marketplace Incentive</span>
                    <br />
                    <span className=''>Marketplace incentive is in place to counter the marketplace commission, reducing or eliminating them.</span>
                  </p>
                </ButtonWrapper>
                <ButtonWrapper
                  onClick={() => ROUTER.push('/')}
                  classes={`max-w-xs ${INCENTIVE_TEXT_STYLE}`}
                >
                  <p className='h-fit sm:h-40'>
                    <span className='text-lg text-indigo-600'>Collection Incentive</span>
                    <br />
                    <span className=''>NFT buyers will receive the set collection incentive every time an NFT from that collection is sold. The collection incentive is funded from the collection incentive pool. This reward will help buyers counter against the collection commission.</span>
                  </p>
                </ButtonWrapper>
              </div> */}

            {/* </div> */}

            

          </div>

      </div>
    </ContentWrapper>
  )
}
