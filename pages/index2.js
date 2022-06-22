import Image from 'next/image';
import TwitterSolid from '@/public/socials/twitter-solid.svg';
import MediumSolid from '@/public/socials/medium-solid.svg';
import DiscordSolid from '@/public/socials/discord-solid.svg';
import GithubSolid from '@/public/socials/github-solid.svg';
import ContentWrapper from '@/components/wrappers/ContentWrapper';
import ButtonWrapper from '@/components/wrappers/ButtonWrapper';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default function Home() {
  const COMMISSION_TEXT_STYLE = 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700';
  const INCENTIVE_TEXT_STYLE = 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700';
  const GALLERY_BOX_STYLE = 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-1 py-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700';

  return (
    <ContentWrapper classes="items-center text-center justify-center">
      {/* Page Content */}
      <div className="flex flex-wrap items-center text-center justify-center relative z-10">

          <div className="py-1 px-2 flex flex-col items-center text-center justify-center w-full">

            {/* main landing area */}
            <div className='py-10 sm:py-36 gap-4 flex flex-wrap md:flex-nowrap flex-row items-center text-center justify-between w-full'>
              {/* left */}
              <div className='flex flex-col items-center text-center justify-center w-full'>
                <p className='text-white text-3xl sm:text-5xl md:text-7xl'>The Future of <span className='text-indigo-600'>NFT TRADING</span> is Here!</p>
                <p className='text-gray-400 text-sm md:text-md lg:text-lg'>BumbleBuzz is a NFT marketplace focused on empowering artists and creators. Our vision is to revolutionize the existing marketplace ideology by introducing more tools for creators to express their artwork.</p>

                <div className='py-2 flex flex-row gap-x-2'>
                  <ButtonWrapper
                    onClick={() => window.open('https://twitter.com/0xBumbleBuzz/', '_blank')}
                    classes="gap-x-1 items-center bg-gray-100 hover:bg-gray-300 focus:ring-gray-500"
                  ><TwitterSolid height={24} width={24} /></ButtonWrapper>
                  <ButtonWrapper
                    onClick={() => window.open('https://medium.com/bumblebuzz/', '_blank')}
                    classes="gap-x-1 items-center bg-gray-100 hover:bg-gray-300 focus:ring-gray-500"
                  ><MediumSolid height={24} width={24} /></ButtonWrapper>
                  <ButtonWrapper
                    onClick={() => window.open('https://google.ca/', '_blank')}
                    classes="gap-x-1 items-center bg-gray-100 hover:bg-gray-300 focus:ring-gray-500"
                  ><DiscordSolid height={24} width={24} /></ButtonWrapper>
                  <ButtonWrapper
                    onClick={() => window.open('https://github.com/Bumble-Buzz/', '_blank')}
                    classes="gap-x-1 items-center bg-gray-100 hover:bg-gray-300 focus:ring-gray-500"
                  ><GithubSolid height={24} width={24} /></ButtonWrapper>
                </div>
              </div>
              {/* right */}
              <div className='flex flex-col items-center text-center justify-center w-full'>
                <div className={`relative w-full w-64 xsm:w-96 ${GALLERY_BOX_STYLE}`}>
                  {/* <Image src={'/art/personal_6.png'} layout="responsive" sizes="50vw" width="64" height="64" /> */}
                  {/* <img src="https://bumblebuzz.s3.us-east-1.amazonaws.com/demo/art6.jpg" /> */}
                  <Carousel className='w-full' showThumbs={false} showStatus={false} infiniteLoop={true} showIndicators={true}>
                    <img src="https://bumblebuzz.s3.us-east-1.amazonaws.com/demo/art6.jpg" />
                    <img src="https://bumblebuzz.s3.us-east-1.amazonaws.com/demo/art2.jpg" />
                    <img src="https://bumblebuzz.s3.us-east-1.amazonaws.com/demo/art5.jpg" />
                    <img src="https://bumblebuzz.s3.us-east-1.amazonaws.com/demo/art1.jpg" />
                  </Carousel>
                </div>
              </div>
            </div>

            {/* commissions area */}
            <div className='py-4 xsm:py-10 flex flex-col items-center text-center justify-between w-full'>
              {/* heading */}
              <div className='py-2 w-full'>
                <p className='text-3xl sm:text-5xl md:text-7xl text-gray-200'>Commissions</p>
              </div>
              {/* description */}
              <div className='py-2 w-full max-w-md md:max-w-7xl'>
                <p className='text-sm text-gray-200'>
                  <span>There are many ways to collect commission on BumbleBuzz. This is to help creators earn rewards for their hard work.</span>
                  <br />
                  <span>Given a successful sale, the commission comes from the final sale price and is distributed amongst the creators.</span>
                </p>
              </div>
              {/* content */}
              <div className='py-2 flex flex-row flex-wrap items-center text-center justify-center w-full'>
                <div className={`max-w-xs ${COMMISSION_TEXT_STYLE}`}>
                  <p className='h-fit sm:h-40'>
                    <span className='text-lg text-indigo-600'>Artist Commission</span>
                    <br />
                    <span className=''>All NFTs created through BumbleBuzz are eligible for the artist commission. The artists will have the option to set the commission percentage during the creation process. Every time an NFT is sold the creator of the NFT will receive the artist commission.</span>
                  </p>
                </div>
                <div className={`max-w-xs ${COMMISSION_TEXT_STYLE}`}>
                  <p className='h-fit sm:h-40'>
                    <span className='text-lg text-indigo-600'>Collection Commission</span>
                    <br />
                    <span className=''>Collection owners will have the option to turn on collection commission.</span>
                    <br />
                    <span className=''>Collection owners will receive the set collection commission every time an NFT from that collection is sold.</span>
                  </p>
                </div>
                <div className={`max-w-xs ${COMMISSION_TEXT_STYLE}`}>
                  <p className='h-fit sm:h-40'>
                    <span className='text-lg text-indigo-600'>Collection Reflection</span>
                    <br />
                    <span className=''>Collection owners have the ability to enable the reflection commission, which will result in all NFT owners earning rewards every time an NFT is sold associated with that collection.</span>
                  </p>
                </div>
                <div className={`max-w-xs ${COMMISSION_TEXT_STYLE}`}>
                  <p className='h-fit sm:h-40'>
                    <span className='text-lg text-indigo-600'>Marketplace Commission</span>
                    <br />
                    <span className=''>Marketplace commission is a standard 2% from the final sale price.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* incentives area */}
            <div className='py-4 xsm:py-10 flex flex-col items-center text-center justify-between w-full'>
              {/* heading */}
              <div className='py-2 w-full'>
                <p className='text-3xl sm:text-5xl md:text-7xl text-gray-200'>Incentives</p>
              </div>
              {/* description */}
              <div className='py-2 w-full max-w-md md:max-w-7xl'>
                <p className='text-sm text-gray-200'>
                  <span>BubbleBuzz allows creators and collectors to receive incentives to help users grow.</span>
                  <br />
                  <span>There are two types of incentives: marketplace incentives and collection-specific incentives.</span>
                </p>
              </div>
              {/* content */}
              <div className='py-2 flex flex-row flex-wrap items-center text-center justify-center w-full'>
                <div
                  className={`max-w-xs ${INCENTIVE_TEXT_STYLE}`}
                >
                  <p className='h-fit sm:h-40'>
                    <span className='text-lg text-indigo-600'>Marketplace Incentives</span>
                    <br />
                    <span className=''>Marketplace incentive is in place to counter the marketplace commission, reducing or eliminating them.</span>
                  </p>
                </div>
                <div
                  className={`max-w-xs ${INCENTIVE_TEXT_STYLE}`}
                >
                  <p className='h-fit sm:h-40'>
                    <span className='text-lg text-indigo-600'>Collection Incentive</span>
                    <br />
                    <span className=''>NFT buyers will receive the set collection incentive every time an NFT from that collection is sold. The collection incentive is funded from the collection incentive pool. This reward will help buyers counter against the collection commission.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* network area */}
            <div className='py-4 xsm:py-10 flex flex-col items-center text-center justify-between w-full'>
              {/* heading */}
              <div className='py-2 w-full'>
                <p className='text-3xl sm:text-5xl md:text-7xl text-gray-200'>Aurora / NEAR Protocol</p>
              </div>
              {/* description */}
              <div className='py-2 w-full max-w-md md:max-w-7xl'>
                <p className='text-sm text-gray-200'>
                  <span>BubbleBuzz is coming to Aurora network in August, 2022.</span>
                  <br />
                  <span>BumbleBuzz is coming to NEAR Protocol in Q4, 2022.</span>
                </p>
              </div>
              {/* content */}
              <div className='py-2 flex flex-row flex-wrap items-center text-center justify-center w-full'>
                <div className={`max-w-xs ${INCENTIVE_TEXT_STYLE}`}>
                  <p className='h-fit sm:h-40'>
                    <span className='text-lg text-indigo-600'>BumbleBuzz on Aurora</span>
                    <br />
                    <span className=''>The goal is to launch BumbleBuzz on Aurora first with all the necessary features while working on any hiccups along the way. The BumbleBuzz team will start to focus on deploying to the NEAR Protocol as the product becomes more stable on Aurora.</span>
                  </p>
                </div>
                <div className={`max-w-xs ${INCENTIVE_TEXT_STYLE}`}>
                  <p className='h-fit sm:h-40'>
                    <span className='text-lg text-indigo-600'>BumbleBuzz on NEAR</span>
                    <br />
                    <span className=''>BumbleBuzz team is dedicated to helping by providing a quality product for its users. We see NEAR Protocol growing exponentially in the near future and we are looking forwards to being a part of that journey.</span>
                  </p>
                </div>
              </div>
            </div>

          </div>

      </div>
    </ContentWrapper>
  )
}
