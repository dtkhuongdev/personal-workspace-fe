import { useEffect, useRef } from "react";
import { CredentialResponse } from "../../../interfaces/google";
import { useLogin } from "@refinedev/core";

const ButtonGoogle = (): JSX.Element => {
  const { mutate: login } = useLogin<CredentialResponse>();

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.google || !divRef.current) {
      return;
    }

    try {
      window.google.accounts.id.initialize({
        ux_mode: "popup",
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: async (res: CredentialResponse) => {
          if (res.credential) {
            login(res);
          }
        },
      });
      window.google.accounts.id.renderButton(divRef.current, {
        theme: "filled_blue",
        size: "large",
        type: "standard",
        width: "260",
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <div ref={divRef} />;
};

export default ButtonGoogle;
