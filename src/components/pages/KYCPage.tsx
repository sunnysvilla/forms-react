import AdminContentLayout from "../layouts/AdminContentLayout";
import KYCTable from "../library/admin/KYCTable";

const KYCPage = () => {
  return (
    <AdminContentLayout title="KYCs" subtitle="View all your KYCs here.">
      <KYCTable />
    </AdminContentLayout>
  );
};

export default KYCPage;
