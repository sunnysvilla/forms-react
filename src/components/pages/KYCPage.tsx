import AdminContentLayout from "../layouts/AdminContentLayout";
import KYCFilterStack from "../library/admin/KYCFilterStack";
import KYCTable from "../library/admin/KYCTable";

const KYCPage = () => {
  return (
    <AdminContentLayout
      title="KYCs"
      subtitle="View all your KYCs here."
      action={<KYCFilterStack />}
    >
      <KYCTable />
    </AdminContentLayout>
  );
};

export default KYCPage;
