import AdminContentLayout from "../layouts/AdminContentLayout";
import FilterKYCBtn from "../library/actionButtons/FilterKYCBtn";
import KYCTable from "../library/admin/KYCTable";

const KYCPage = () => {
  return (
    <AdminContentLayout
      title="KYCs"
      subtitle="View all your KYCs here."
      action={<FilterKYCBtn />}
    >
      <KYCTable />
    </AdminContentLayout>
  );
};

export default KYCPage;
