import PropertyList from "../library/admin/PropertyList";
import AdminContentLayout from "../layouts/AdminContentLayout";

const PropertiesPage = () => {
  return (
    <AdminContentLayout
      title="Properties"
      subtitle="Manage your properties here."
    >
      <PropertyList />
    </AdminContentLayout>
  );
};

export default PropertiesPage;
