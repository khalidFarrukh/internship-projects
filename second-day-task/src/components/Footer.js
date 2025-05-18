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
              `}
            >
              <div
                className=
                {`
                  w-[100%]
                  h-[100%]
                  font-poppins
                  flex
                  flex-col
                  w512:flex-row
                  w512:items-center
                `}
              >
                <div
                  className=
                  {`
                    mb-6
                    w512:w-[50%]
                    w512:h-full
                    w512:mb-0
                    flex
                  `}
                >
                  <Link
                    href="/"
                    className=
                    {`
                      mt-4
                      text-[var(--myTextColorNormal)]
                      
                      font-semibold
                    `}
                  >
                    MEDUSA STORE
                  </Link>

                </div>
                <div
                  className=
                  {`
                    relative
                    text-[var(--myTextColorNormal)]
                    w-[50%]
                    h-full
                  `}
                >
                  <div
                    className=
                    {`
                      absolute
                      grid
                      grid-cols-2

                      gap-x-10
                      w768:gap-x-20
                      
                      h-full
                      mr-6
                      right-0
                    `}
                  >

                    <div
                      className=
                      {`
                      w-[110px]
                    `}
                    >
                      <ul className=
                        {`
                        leading-7
                      text-[11px]
                    `}
                      >
                        <li
                          className=
                          {`
                            font-semibold
                            text-black
                          `}
                        >
                          Categories
                        </li>
                        <li>
                          <Link href="/"
                            className=
                            {`
                              font-medium
                              text-black
                            `}
                          >
                            Clothing
                          </Link>
                        </li>
                        <li className="pl-6">
                          <Link href="/">
                            Hoodies
                          </Link>
                        </li>
                        <li className="pl-6">
                          <Link href="/">
                            Accessories
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            Audio
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            Furniture
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div
                      className=
                      {`
                      w-[110px]
                    `}
                    >
                      <ul className=
                        {`
                        leading-7
                      text-[11px]
                    `}
                      >
                        <li
                          className=
                          {`
                            font-semibold
                            text-black
                          `}
                        >
                          Collections
                        </li>
                        <li>
                          <Link href="/">
                            Latest Drops
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            Weekly Picks
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            Sale
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

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
