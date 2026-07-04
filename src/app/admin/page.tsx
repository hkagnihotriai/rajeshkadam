import { logout } from "./actions";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-cream px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between">
          <h1 className="font-heading text-2xl font-semibold text-ink">Admin Dashboard</h1>
          <form action={logout}>
            <button
              type="submit"
              className="rounded-full border border-ink/20 px-4 py-2 text-sm text-ink/70 transition hover:bg-ink/5"
            >
              Log out
            </button>
          </form>
        </div>
        <p className="mt-6 text-ink/70">
          Workshop enquiries, session bookings, and blog management will appear
          here in a later phase.
        </p>
      </div>
    </div>
  );
}
