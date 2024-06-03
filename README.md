# E-commerce App with Next.js, Prisma, MongoDB and Stripe Payments

This is my E-commerce app built in Next.js framework! This project aims to provide a robust platform for online shopping with a focus on performance, scalability, and user experience.

## Features

- **Next.js Framework**: Utilizing the power of Next.js for server-side rendering, routing, and other optimizations.
- **Prisma and MongoDB**: Backend powered by Prisma ORM with MongoDB as the database for efficient data storage and retrieval.
- **Stripe Payments**: Integrated Stripe API for seamless and secure payment processing during checkout.

## Installation

1. **Clone the repository.**

```bash
git clone https://github.com/Arijeet10/ecommerce.git
```

2. **Install dependencies**

```bash
cd ecommerce
npm install
```

3. **Set up environment variables**

```bash
NEXT_PUBLIC_FAKE_STORE_API=https://fakestoreapi.com/products
DATABASE_URL=
GOOGLE_CLIENT_ID="
GOOGLE_CLIENT_SECRET=
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="ecommerceApppp"
NODE_ENV="development"
TOKEN_SECRET="apptokenmm"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```

Fill up all the environment variables according to your credentials.

## Usage

1. **Start the development server.**

```bash
npm run dev
```

2. **Open your browser and navigate to http://localhost:3000**
3. **Explore the app and enjoy virtual shopping!**



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
