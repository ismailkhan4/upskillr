import { ShieldCheck, CheckCircle } from "lucide-react";

export default function ProfileSecurity() {
  return (
    <section
      id="profile"
      className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12"
    >
      {/* Profile Customization */}
      <div>
        <h3 className="text-2xl font-semibold">Profile Customization</h3>
        <p className="mt-3 text-gray-600">
          Manage display names, avatars, and certificates. Create personalized
          learning paths and team branding.
        </p>
      </div>

      {/* Security */}
      <div>
        <h3 className="text-2xl font-semibold">Security & Privacy</h3>
        <p className="mt-3 text-gray-600">
          Powered by Clerk for auth, Neon for databases, and Drizzle ORM for
          safe, scalable queries.
        </p>

        <div className="mt-6 space-y-3">
          <div className="flex gap-3">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
            <span>Enterprise-grade encryption and access control</span>
          </div>
          <div className="flex gap-3">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <span>Exportable data and backups</span>
          </div>
        </div>
      </div>
    </section>
  );
}
