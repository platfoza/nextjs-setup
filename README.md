This is a [Next.js](https://nextjs.org/) (13.5.4) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


The project considered:
```bash
- Logging (winston)
- Error logging (SSR and client error)
- Auth with cookie (use SSR)
- Performance test (Artillery)
```


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Сonfiguring the debugger in the Webstorm

```
Open 'Edit Run/Debug configurstions' dialog.
Сlick Add new configuration (+).
Choose 'JavaScript Debug'
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

To learn more about Artillery for Performance Testing
- [Artillery Doc](https://www.artillery.io/docs)
- ["Node.js Performance Testing Tools For Getting Proven Results"](https://hackernoon.com/nodejs-performance-testing-tools-for-getting-proven-results)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
