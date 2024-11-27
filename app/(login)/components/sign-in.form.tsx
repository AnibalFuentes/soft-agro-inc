// "use client";

// import { useState } from "react";

// import toast from "react-hot-toast";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { LoaderCircle, Eye, EyeOff } from "lucide-react";
// import Link from "next/link";
// import { login } from "../../../lib/auth-actions";

// const SignInForm = () => {
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [showPassword, setShowPassword] = useState<boolean>(false);

//   return (
//     <div>
//       <div className="text-center">
//         <h1 className="text-2xl font-semibold">Inicio Sesión</h1>
//         <p className="text-sm text-muted-foreground">
//           Ingresa tu email y contraseña para acceder
//         </p>
//       </div>

//       <form action="">
//         <div className="grid gap-2">
//           {/* Email */}
//           <div className="mb-3">
//             <Label htmlFor="email">Correo</Label>
//             <Input
//               id="email"
//               name="email"
//               type="email"
//               placeholder="m@example.com"
//               required
//               autoComplete="email"
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-3 relative">
//             <Label htmlFor="password">Contraseña</Label>
//             <Input
//               required
//               id="password"
//               placeholder="******"
//               type={showPassword ? "text" : "password"}
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-2 top-9"
//             >
//               {showPassword ? (
//                 <EyeOff className="h-5 w-5" />
//               ) : (
//                 <Eye className="h-5 w-5" />
//               )}
//             </button>
//           </div>

//           <Link
//             href="/forgot-password"
//             className="underline text-muted-foreground underline-offset-4 hover:text-primary mb-6 text-sm text-end"
//           >
//             ¿Olvidaste la contraseña?
//           </Link>

//           {/* Botón de envío */}
//           <Button type="submit" formAction={login} disabled={isLoading}>
//             {isLoading && <LoaderCircle className="mr-2 h-4 animate-spin" />}
//             {!isLoading && "Iniciar Sesión"}
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignInForm;
