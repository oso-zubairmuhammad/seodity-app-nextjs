This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


<p className="2xl:text-blue-400 xl:text-red-400 lg:text-yellow-400 md:text-green-400 sm:text-purple-400 text-orange-400 font-semibold pt-2">

  <div className="md:flex hidden justify-between items-center py-3 px-11 flex-wrap">
        <img
          className="order-1 2xl:pl-0 xl:pl-0 lg:pl-0 md:pl-0 sm:pl-44 pl-32"
          src={"/images/navbar-logo.png"}
          alt="navbar logo"
        />

        <ul className="order-2 flex gap-7 items-center justify-center">
          <li>
            <Link href={"/dashboard"}>
              <img
                className="px-3 py-3 rounded-xl"
                src={"/icons/home-icon.svg"}
                alt="home icon"
              />
            </Link>
          </li>
          <li>
            <Link href={"/invoices"}>
              <img
                className="w-6"
                src={"/icons/nav-icon1.svg"}
                alt="nav icon 1"
              />
            </Link>
          </li>
          <li>
            <Link href={"/invoices"}>
              <img
                className="w-6"
                src={"/icons/nav-icon2.svg"}
                alt="nav icon 2"
              />
            </Link>
          </li>
          <li>
            <Link href={"/user-details"}>
              <img
                className="w-4 h-5"
                src={"/icons/user-details-icon.svg"}
                alt="user details icon"
              />
            </Link>
          </li>
          <li>
            <Link href={"/invoices"}>
              <img
                className="w-5"
                src={"/icons/invoices-icon.svg"}
                alt="invoices icon"
              />
            </Link>
          </li>
          <li>
            <Link href={"/users"}>
              <img
                className="w-5"
                src={"icons/nav-icon3.svg"}
                alt="nav icon 3"
              />
            </Link>
          </li>
        </ul>

        <div className="order-3 md:flex flex gap-x-8 items-center justify-end">
          <div className="flex items-center gap-x-2">
            <p className="font-rubikRegular">kowalski@gmail</p>
            <img
              className="w-2 h-2"
              src={"/icons/down-arrow-icon.svg"}
              alt="down arrow icon"
            />
          </div>

          <Link
            className="text-sm bg-[#E0EDF6] px-4 py-2 rounded-lg font-semibold text-[#2A82B4] font-rubikRegular"
            href={"/login"}
          >
            Log out
          </Link>
        </div>
      </div>
      <div className="md:hidden flex justify-between items-center py-3 px-11 flex-wrap">
        <img
          className="order-1 2xl:pl-0 xl:pl-0 lg:pl-0 md:pl-0 sm:pl-44 pl-32"
          src={"/images/navbar-logo.png"}
          alt="navbar logo"
        />

        <ul className="order-2 flex gap-7 items-center justify-center">
          <li>
            <Link href={"/dashboard"}>
              <img
                className="px-3 py-3 rounded-xl"
                src={"/icons/home-icon.svg"}
                alt="home icon"
              />
            </Link>
          </li>
          <li>
            <Link href={"/invoices"}>
              <img
                className="w-6"
                src={"/icons/nav-icon1.svg"}
                alt="nav icon 1"
              />
            </Link>
          </li>
          <li>
            <Link href={"/invoices"}>
              <img
                className="w-6"
                src={"/icons/nav-icon2.svg"}
                alt="nav icon 2"
              />
            </Link>
          </li>
          <li>
            <Link href={"/user-details"}>
              <img
                className="w-4 h-5"
                src={"/icons/user-details-icon.svg"}
                alt="user details icon"
              />
            </Link>
          </li>
          <li>
            <Link href={"/invoices"}>
              <img
                className="w-5"
                src={"/icons/invoices-icon.svg"}
                alt="invoices icon"
              />
            </Link>
          </li>
          <li>
            <Link href={"/users"}>
              <img
                className="w-5"
                src={"icons/nav-icon3.svg"}
                alt="nav icon 3"
              />
            </Link>
          </li>
        </ul>

        <div className="order-3 md:flex flex gap-x-8 items-center justify-end">
          <div className="flex items-center gap-x-2">
            <p className="font-rubikRegular">kowalski@gmail</p>
            <img
              className="w-2 h-2"
              src={"/icons/down-arrow-icon.svg"}
              alt="down arrow icon"
            />
          </div>

          <Link
            className="text-sm bg-[#E0EDF6] px-4 py-2 rounded-lg font-semibold text-[#2A82B4] font-rubikRegular"
            href={"/login"}
          >
            Log out
          </Link>
        </div>
      </div>