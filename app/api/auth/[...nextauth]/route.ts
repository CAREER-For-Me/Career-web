import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    // 이메일/비밀번호 로그인 설정
    CredentialsProvider({
      id: "email-password-credential", // 꼭 설정 할 것
      name: "Credentials",
      credentials: {
        email: {
          label: "이메일",
          type: "email",
          placeholder: "이메일을 입력해주세요.",
        },
        password: {
          label: "비밀번호",
          type: "password",
          placeholder: "비밀번호를 입력해주세요.",
        },
      },
      async authorize(credentials) {
        const res = await fetch("http://localhost:8080/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const user = await res.json();

        if (res.ok && user) {
          return user; // 인증 성공 시 사용자 정보 반환
        }
        return null; // 인증 실패 시 null 반환
      },
    }),

    // Google 소셜 로그인 설정
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),

    // Kakao 소셜 로그인 설정
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
    }),

    // GitHub 소셜 로그인 설정
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return "/"; // 로그인 성공 후 리다이렉트
    },
  },
  secret: process.env.JWT_SECRET, // 보안 위함
});

export { handler as GET, handler as POST };
