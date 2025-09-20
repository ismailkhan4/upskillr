import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    tier: "Free",
    price: "$0",
    features: ["AI syllabus", "Personal learning path", "Community support"],
  },
  {
    tier: "Pro",
    price: "$15/mo",
    features: ["Private courses", "Advanced analytics", "Exportable certs"],
    highlighted: true,
  },
  {
    tier: "Enterprise",
    price: "Contact Us",
    features: ["SSO & SAML", "Audit logs", "Dedicated support"],
  },
];

export default function Pricing() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-center">
      <h3 className="text-2xl font-semibold">Simple Pricing</h3>
      <p className="mt-2 text-gray-600">
        For educational purposes only. Pricing may not reflect actual costs.
      </p>

      <div className="mt-8 grid sm:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.tier}
            className={`p-6 rounded-xl border ${
              plan.highlighted
                ? "border-indigo-500 shadow-md bg-indigo-50"
                : "border-gray-200 bg-white"
            }`}
          >
            <h4 className="font-semibold text-lg">{plan.tier}</h4>
            <p className="mt-2 text-xl font-bold">{plan.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="mt-6 w-full">Choose</Button>
          </div>
        ))}
      </div>
    </section>
  );
}
