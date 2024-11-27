// import SignInForm from "@/app/login/components/sign-in.form";
// import Logo from "@/components/logo";
// import React from "react";

import { login, signup } from "@/lib/auth-actions";

// const HomePage =  () => {

//   return (
//     <div className="flex justify-center items-center md:h-[95vh] md:px-10 lg:px-26">
//       <div className="container h-[85vh] felx-col justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
//         {/* <===================Image===================> */}
//         <div className="relative hidden h-full flex-col p-10 text-white lg:flex">
//           <div className="bg-auth absolute inset-0"></div>
//           <Logo />
//           <div className="relative z-20 mt-auto">
//             <p className="text-lg">
//               {"este administrador hace tu vida mas facil"}
//             </p>
//             <footer className="text-sm"> _____</footer>
//           </div>
//         </div>

//         {/* <===================Form===================> */}
//         <div className="pt-10 lg:p-8 flex items-center md:h-[70vh] ">
//           <div className="mx-auto flex flex-col justify-center space-y-6 sm:w-[450px]">
//             <SignInForm />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/dashboard");
  }

  return (
    <section className="h-[calc(100vh-57px)] flex justify-center items-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <form id="login-form" className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                minLength={6}
                name="password"
                id="password"
                type="password"
                required
              />
            </div>
            {searchParams.message && (
              <div className="text-sm font-medium text-destructive">
                {searchParams.message}
              </div>
            )}
            <Button formAction={login} className="w-full">
              Login
            </Button>
          </form>

          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <button formAction={signup} form="login-form" className="underline">
              Sign up
            </button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
