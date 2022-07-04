import Image from 'next/image';
import BgLanding from '@/public/art/stars3.jpg';
import BgAboutUs from '@/public/bg/bricks.jpg';
import PicRoshi from '@/public/roshi.jpg';
import PicMystique from '@/public/mystique.jpg';
import PicCommission from '@/public/art/galaxy.jpg';
import PicIncentive from '@/public/art/beach4.jpg';
import TwitterSolid from '@/public/socials/twitter-solid.svg';
import MediumSolid from '@/public/socials/medium-solid.svg';
import DiscordSolid from '@/public/socials/discord-solid.svg';
import GithubSolid from '@/public/socials/github-solid.svg';
import ButtonWrapper from '@/components/wrappers/ButtonWrapper';


export default function Home() {
  const COMMISSION_TEXT_STYLE = 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-900 dark:hover:border-gray-600 dark:focus:ring-gray-700';
  const INCENTIVE_TEXT_STYLE = 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-900 dark:hover:border-gray-600 dark:focus:ring-gray-700';
  const GALLERY_BOX_STYLE = 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-1 py-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700';

  return (
    <main className='flex flex-nowrap flex-col items-center px-0 py-0 w-full bg-black'>

      {/* main landing area */}
      <div className='relative w-full h-screen'>
        <Image alt="stars" className='z-0' src={BgLanding} layout="fill" objectFit="cover" quality={1} priority={true} />
        <div className='flex flex-wrap items-center text-center justify-center z-10 w-full'>

          <div className='flex flex-col items-center text-center justify-center w-full absolute inset-0'>
            <div className='flex flex-col items-center text-center justify-center w-full max-w-4xl'>
              <p className='text-white text-3xl sm:text-5xl md:text-7xl'>The Future of <span className='text-indigo-600'>NFT TRADING</span> is Here!</p>
              <p className='text-gray-400 text-sm md:text-md lg:text-lg  max-w-3xl'>BumbleBuzz is a NFT marketplace focused on empowering artists and creators. Our vision is to revolutionize the existing marketplace ideology by introducing more tools for creators to express their artwork.</p>

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
                  onClick={() => window.open('https://discord.gg/FgF3Pp5H', '_blank')}
                  classes="gap-x-1 items-center bg-gray-100 hover:bg-gray-300 focus:ring-gray-500"
                ><DiscordSolid height={24} width={24} /></ButtonWrapper>
                <ButtonWrapper
                  onClick={() => window.open('https://github.com/Bumble-Buzz/', '_blank')}
                  classes="gap-x-1 items-center bg-gray-100 hover:bg-gray-300 focus:ring-gray-500"
                ><GithubSolid height={24} width={24} /></ButtonWrapper>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* header */}
      <div className='py-2 w-full h-fit bg-gray-800 flex flex-row flex-wrap items-center text-center justify-center gap-4'>
        <ButtonWrapper
          onClick={() => window.open('https://docs.bumblebuzz.io/', '_blank')}
          classes="py-1 px-1 w-32 gap-x-1 items-center bg-gray-100 hover:bg-gray-300 focus:ring-gray-500 text-black"
        >Documentation</ButtonWrapper>
        <ButtonWrapper
          onClick={() => window.open('https://github.com/Bumble-Buzz/', '_blank')}
          classes="py-1 px-1 w-32 gap-x-1 items-center bg-gray-100 hover:bg-gray-300 focus:ring-gray-500 text-black"
        >Roadmap</ButtonWrapper>
      </div>

      {/* about us */}
      <div className='pt-28 pb-1 w-full h-fit bg-gray-700 flex flex-col flex-wrap items-center text-center justify-center gap-4'>
        <div className='py-2 w-full'>
          <p className='text-3xl sm:text-5xl md:text-6xl text-gray-200 underline decoration-sky-600'>About Us</p>
        </div>
        <div className='flex flex-row flex-wrap items-center text-center justify-center w-full gap-4'>
          <div className={`max-w-xs ${COMMISSION_TEXT_STYLE}`}>
            <p className='relative flex flex-col items-center text-center justify-center h-fit'>
              <div className='w-20'>
                <Image alt="roshi" className='' src={PicRoshi} layout="responsive" sizes="50vw" width={32} height={64} quality={50} />
              </div>
              <span className='text-lg text-indigo-600'>0xRoshi</span>
              <span className=''>Co-Founder - Extensive experience in Frond-End and Back-End software development. Recently shifted focus on the Web 3.0 world. Responsible for all technical development of BumbleBuzz.</span>
              <br />
              <span className=''>Twitter: <a href="https://twitter.com/0x_Roshi/" target='blank' className='text-blue-500'>0x_Roshi</a></span>
            </p>
          </div>
          <div className={`max-w-xs ${COMMISSION_TEXT_STYLE}`}>
            <p className='relative flex flex-col items-center text-center justify-center h-fit'>
              <div className='w-20'>
                <Image alt="mystique" className='' src={PicMystique} layout="responsive" sizes="50vw" width={32} height={64} quality={50} />
              </div>
              <span className='text-lg text-indigo-600'>0xMystique</span>
              <span className=''>Co-Founder - Extensive experience in marketing and human resources. Recently shifted focus on the Web 3.0 world. Responsible for marketing, technical writing, and hiring for BumbleBuzz.</span>
              <br />
              <span className=''>Twitter: <a href="https://twitter.com/0x_Mystique/" target='blank' className='text-blue-500'>0x_Mystique</a></span>
            </p>
          </div>
        </div>
      </div>

      {/* vision */}
      <div className='relative w-full [height:calc(100vh)] xsm:[height:calc(75vh)] sm:[height:calc(50vh)]'>
        <Image alt="bricks" className='z-0' src={BgAboutUs} layout="fill" objectFit="cover" quality={100} />
        <div className='flex flex-wrap items-center text-center justify-center z-10 w-full'>

          <div className='flex flex-col items-center text-center justify-center w-full absolute inset-0'>
            <div className='py-2 w-full'>
              <p className='text-3xl sm:text-5xl md:text-6xl text-gray-700 underline decoration-indigo-600'>Our Vision</p>
            </div>
            <div className='flex flex-col flex-wrap max-w-md'>
              <p className='text-2xl text-indigo-600'>An experienced team</p>
              <p>Though we are a small team, we are both very experienced and good at what we do.</p>
              <br />
              <p className='text-2xl text-indigo-600'>Fresh minds, new ideas</p>
              <p>We feel that the current NFT marketplace is very dry, and same ideas are being repeated.</p>
              <p>Our vision is build upon the existing NFT marketplace concepts, and unlock more functionality. More ways for artists to own art.</p>
              <br />
              <p className='text-2xl text-indigo-600'>Usability</p>
              <p>All the best functionality in the world does not mean much if using the product is difficult.</p>
              <p>With our expertise, we are dedicated to build BumbleBuzz which makes it extremely easy for its users to interact with.</p>
            </div>
          </div>

        </div>
      </div>

      {/* fundamentals */}
      <div className='pt-28 pb-1 w-full h-fit bg-gray-700 flex flex-col flex-wrap items-center text-center justify-center gap-4'>
        <div className='py-2 w-full'>
          <p className='text-3xl sm:text-5xl md:text-6xl text-gray-200 underline decoration-sky-600'>Fundamentals</p>
        </div>
        {/* commissions */}
        <div className='flex flex-row flex-wrap items-end text-center justify-evenly w-full gap-4'>
          <div className={`flex lg:flex-1 w-full ${GALLERY_BOX_STYLE}`}>
            <div className='relative w-full [height:calc(50vh)]'>
              <Image alt="galaxy" src={PicCommission} layout="fill" objectFit="cover" quality={50} />
            </div>
          </div>
          <div className='flex flex-col flex-wrap max-w-2xl'>
            <p className='text-2xl sm:text-3xl md:text-4xl text-indigo-600'>Commissions</p>
            <p className='px-1 text-white'>There are many ways to collect commission on BumbleBuzz. This is to help creators earn rewards for their hard work.</p>
            <p className='px-1 text-white'>Given a successful sale, the commission comes from the final sale price and is distributed amongst the creators.</p>
            <br />
            <div className='flex flex-row flex-wrap items-center text-center justify-center w-full gap-4'>
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
        </div>
        <div className='py-10'></div>
        {/* incentives */}
        <div className='flex flex-row flex-wrap items-end text-center justify-evenly w-full gap-4'>
          <div className='flex flex-col flex-wrap max-w-2xl'>
            <p className='text-2xl sm:text-3xl md:text-4xl text-indigo-600'>Incentives</p>
            <p className='px-1 text-white'>BubbleBuzz allows creators and collectors to receive incentives to help users grow.</p>
            <p className='px-1 text-white'>There are two types of incentives: marketplace incentives and collection-specific incentives.</p>
            <br />
            <div className='flex flex-row flex-wrap items-center text-center justify-center w-full gap-4'>
              <div className={`max-w-xs ${INCENTIVE_TEXT_STYLE}`}>
                <p className='h-fit sm:h-40'>
                  <span className='text-lg text-indigo-600'>Marketplace Incentives</span>
                  <br />
                  <span className=''>Marketplace incentive is in place to counter the marketplace commission, reducing or eliminating them.</span>
                </p>
              </div>
              <div className={`max-w-xs ${INCENTIVE_TEXT_STYLE}`}>
                <p className='h-fit sm:h-40'>
                  <span className='text-lg text-indigo-600'>Collection Incentive</span>
                  <br />
                  <span className=''>NFT buyers will receive the set collection incentive every time an NFT from that collection is sold. The collection incentive is funded from the collection incentive pool. This reward will help buyers counter against the collection commission.</span>
                </p>
              </div>
            </div>
          </div>
          <div className={`flex lg:flex-1 w-full ${GALLERY_BOX_STYLE}`}>
            <div className='relative w-full [height:calc(50vh)]'>
              <Image alt="beach" src={PicIncentive} layout="fill" objectFit="cover" quality={50} />
            </div>
          </div>
        </div>
      </div>

      {/* ecosystem */}
      <div className='relative w-full [height:calc(100vh)] xsm:[height:calc(75vh)] sm:[height:calc(50vh)]'>
        <Image alt="bricks" className='z-0' src={BgAboutUs} layout="fill" objectFit="cover" quality={100} />
        <div className='flex flex-wrap items-center text-center justify-center z-10 w-full'>

          <div className='flex flex-col items-center text-center justify-center w-full absolute inset-0'>
            <div className='py-2 w-full'>
              <p className='text-3xl sm:text-5xl md:text-6xl text-gray-700 underline decoration-indigo-600'>Aurora / NEAR Protocol</p>
            </div>
            <div className='flex flex-col flex-wrap max-w-md'>
              <p className='text-2xl text-indigo-600'>BumbleBuzz on Aurora</p>
              <p>The goal is to launch BumbleBuzz on Aurora first with all the necessary features while working on any hiccups along the way. The BumbleBuzz team will start to focus on deploying to the NEAR Protocol as the product becomes more stable on Aurora.</p>
              <br />
              <p className='text-2xl text-indigo-600'>BumbleBuzz on NEAR</p>
              <p>BumbleBuzz team is dedicated to helping by providing a quality product for its users. We see NEAR Protocol growing exponentially in the near future and we are looking forwards to being a part of that journey.</p>
            </div>
          </div>

        </div>
      </div>

      {/* footer */}
      <div className='py-2 w-full h-fit bg-gray-800 flex flex-row flex-wrap items-center text-center justify-center gap-4'>
        <p className='text-white'>Copyright © 2022 BumbleBuzz Team</p>
      </div>

    </main>
  )
}
