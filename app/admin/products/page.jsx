import { AdminLayout } from "@/components/layout/AdminLayout";
import { catalogProducts, categoryLabel } from "@/lib/catalog";

export default function AdminProductsPage() {
  const products = catalogProducts();

  return (
    <AdminLayout>
      <h1 className="font-headline text-2xl font-extrabold">Products</h1>
      <p className="mt-1 text-sm text-slate-500">{products.length} live accessories</p>
      <div className="mt-6 overflow-x-auto rounded-2xl bg-white border border-slate-200">
        <table className="w-full text-sm">
          <thead className="text-left text-xs uppercase tracking-wide text-slate-400">
            <tr>
              <th className="p-3">SKU</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t border-slate-100">
                <td className="p-3 font-bold">{product.sku}</td>
                <td>{product.name}</td>
                <td>{categoryLabel(product.category)}</td>
                <td>Rs. {product.price.toLocaleString("en-PK")}</td>
                <td>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
