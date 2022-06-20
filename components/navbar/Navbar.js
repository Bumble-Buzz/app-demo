
import LinkWrapper from '@/components/wrappers/LinkWrapper';
import Lexicon from '@/lexicon/navbar';


export default function Navbar() {
  const LINK_STYLE = 'text-white inline-flex justify-center w-full font-medium bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75';

  return (
    <nav className="flex flex-nowrap items-center justify-between bg-gradient-to-l from-gray-500 to-gray-800 py-2 px-4 bg-white shadow-lg sticky top-0 z-20">

      {/* Logo */}
      <div className="flex items-center text-2xl lg:text-3xl font-bold text-gray-800">
        <LinkWrapper link={`/`} linkText={Lexicon.title} classes='text-white' />
      </div>

      {/* Right side links */}
      <div className="flex items-center ml-2 gap-2">
        {/* documentation */}
        <div className="hidden xsm:block ml-2 text-gray-800 font-bold hover:underline">
          <div><a href="https://docs.bumblebuzz.io/" target='blank' className={LINK_STYLE}>Documentation</a></div>
        </div>
        <div className="block xsm:hidden ml-2 text-gray-800 font-bold hover:underline">
          <div><a href="https://docs.bumblebuzz.io/" target='blank' className={LINK_STYLE}>Docs</a></div>
        </div>
      </div>

    </nav>
  )
}
