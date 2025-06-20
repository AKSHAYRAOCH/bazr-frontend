
import { createAuthClient } from "better-auth/client";


export const authClient = createAuthClient({
    baseURL: "http://localhost:3001",
   
  })

export const signIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
    callbackURL: "http://localhost:3000/dashboard",
  })
  console.log(data);

}