
import Image from "next/image";

export default function Card2({ pthumbLink, pname }) {
  return (
    <>
      <div
        className=
        {`
          flex-1
          w-full
          h-[100%]
          rounded-[12px]
          bg-[#fafafa]
          border-1
          border-[var(--myBorderColor)]
          flex
          items-center
          justify-center
        `}
      >
        <Image
          src={pthumbLink}
          alt={pname}
          width={1200}
          height={1200}
          priority
        />
      </div>
    </>
  );
}