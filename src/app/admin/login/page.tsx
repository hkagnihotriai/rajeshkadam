"use client";

import { useActionState } from "react";
import { login, LoginState } from "./actions";

const initialState: LoginState = {};

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-6">
      <form
        action={formAction}
        className="w-full max-w-sm rounded-3xl bg-sandalwood p-8 shadow-sm"
      >
        <h1 className="font-heading text-2xl font-semibold text-ink">Admin Login</h1>
        <p className="mt-2 text-sm text-ink/70">Enter the admin password to continue.</p>

        <input
          type="password"
          name="password"
          required
          autoFocus
          className="mt-6 w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-2.5 text-ink outline-none focus:border-burnt-orange"
          placeholder="Password"
        />

        {state.error && <p className="mt-3 text-sm text-red-700">{state.error}</p>}

        <button
          type="submit"
          disabled={pending}
          className="mt-6 w-full rounded-full bg-burnt-orange px-6 py-3 font-medium text-cream transition hover:bg-ink disabled:opacity-60"
        >
          {pending ? "Checking..." : "Log in"}
        </button>
      </form>
    </div>
  );
}
