import Image from 'next/image';

export default function ContentWrapper({ children, ...props }) {
  // extract classes from props
  let classes = '';
  if (props.classes) {
    classes = props.classes;
    props = Object.fromEntries(Object.entries(props).filter(([key]) => !key.includes('classes')));
  }
  return (
    <main className="flex flex-nowrap flex-col items-center px-0 py-0 w-full bg-black">
      <div
        className={`flex flex-nowrap w-full bg-repeat ${classes}`}
        // style={{minHeight: '500px'}}
        style={{backgroundImage: "url('https://bumblebuzz.s3.us-east-1.amazonaws.com/demo/stars5.jpg')"}}
        {...props}
      >
        {/* <Image
          className="z-0 bg-repeat"
          src={'/art/stars5.jpg'} layout="fill"objectFit="cover" sizes='50vw'
        /> */}
        {children}
      </div>
    </main>
  )
}
