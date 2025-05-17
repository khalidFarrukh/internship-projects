import Link from "next/link"
import Image from "next/image"
import { LogoNext } from '@geist-ui/icons';


export default function Footer() {

  return (
    <>
      <footer
        className=
        {`
          z-[50]
          relative
          w-full
          h-[600px]
          pt-24
          pb-12
          border-t
          border-[#e5e7eb]
          flex
          flex-col


        `}
      >
        <div
          className=
          {`
            w-full
            max-w-[1440px]
            h-[100%]
            mx-auto
          `}
        >
          <div
            className=
            {`
              w-[calc(100%-50px)]
              h-full
              mx-auto
            `}
          >

            <div
              className=
              {`
                pt-12
                w-[100%]
                h-[90%]
                bg-[yellow]
              `}
            >
              {/* <div
                className=
                {`
                  w-[100%]
                  h-[100%]
                  flex
                `}
              >
                <div
                  className=
                  {`
                w-[50%]
                h-full
                flex
                items-center
                bg-[red]

              `}
                >
                  <Link
                    href="/"
                    className=
                    {`
                  
                  text-black
                  font-poppins
                  font-semibold
                `}
                  >
                    MEDUSA STORE
                  </Link>

                </div>
                <div
                  className=
                  {`
                w-[50%]
                h-full
                bg-[green]
              `}
                >

                </div>
              </div> */}

            </div>
            <div
              className=
              {`
              w-[100%]
              h-[10%]
              text-[#9ca3af]
              text-[13px]
              flex
              items-center
              relative
              
            `}
            >
              <div>
                © 2025 Medusa Store. All rights reserved.
              </div>
              <div
                className=
                {`
                  flex
                  absolute
                  right-0
                `}
              >
                Powered by Me &
                <Link
                  href="https://nextjs.org"
                  className=""
                >
                  <Image
                    src="./nextjs-icon.svg"
                    alt="next js logo"
                    width={50}
                    height={50}
                    className="w-[20px] ml-[10px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
