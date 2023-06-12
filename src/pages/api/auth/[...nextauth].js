import NextAuth from "next-auth"

import CredentialsProvider from "next-auth/providers/credentials";
// import prisma from "@/lib/prisma";

export const authOptions = {
  // Configure one or more authentication providers
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'hello@example.com'
        },
        password: { label: 'Password', type: 'password'}
      },
      async authorize(credentials) {
        if(!credentials?.email || !credentials.password) {
          return null
        } 

        const user = await prisma.user.findUnique({
          where: {
            email: credientials.email
          }
        })

        if(!user) {
          return null
        }

        const isPasswordValid = await compare(credentials.password, user.password)

        if(!isPasswordValid) {
          return null
        }

        return {
          id: user.id + '',
          email: user.email,
          name: user.name
        }

      }
    }),

    // ...add more providers here
  ],
  callbacks: {
    session: () => {
      
    },
    jwt: () => {

    }
  }

}
export default NextAuth(authOptions)