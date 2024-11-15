import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import Image from "next/image";
import Logo from "@/components/logo";

export const metadata: Metadata = {
  title: "Login - finance.ia",
};

const LoginPage = async () => {
  const { userId } = await auth();
  userId && redirect("/dashboard");

  return (
    <div className="grid h-full grid-cols-2">
      <div className="flex h-full items-center justify-center">
        <div className="mx-auto flex w-full max-w-[30.5rem] flex-col gap-8">
          <Logo />
          <h1>Bem-Vindo</h1>
          <p className="text-opacity-5">
            A Finance AI é uma plataforma de gestão financeira que utiliza IA
            para monitorar suas movimentações, e oferecer insights
            personalizados, facilitando o controle do seu orçamento.
          </p>
          <SignInButton>
            <Button variant={"outline"}>
              <Image
                src="/google.svg"
                alt="logo do google"
                height={20}
                width={20}
              />
              Entrar com o Google
            </Button>
          </SignInButton>
        </div>
      </div>

      <div className="relative h-full w-full">
        <Image
          src="/hero-login-banner.png"
          fill
          className="object-cover"
          alt="hero-login-banner.png"
        />
      </div>
    </div>
  );
};

export default LoginPage;
