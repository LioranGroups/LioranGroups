import Link from "next/link";

export default function LioranTechProductsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Products</h2>
      <ul className="space-y-3">
        <li>
          <Link
            href="/companies/lioran-tech/products/hushar-spreadsheet"
            className="text-blue-400 hover:underline"
          >
            Hushar Spreadsheet
          </Link>
        </li>
        <li>
          <Link
            href="/companies/lioran-tech/products/hostel-buddy"
            className="text-blue-400 hover:underline"
          >
            Hostel Buddy
          </Link>
        </li>
      </ul>
    </div>
  );
}

