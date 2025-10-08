import PropertyList from "../library/admin/PropertyList";
import AdminContentLayout from "../layouts/AdminContentLayout";
import AddPropertyBtn from "../library/actionButtons/AddPropertyBtn";

const PropertiesPage = () => {
  return (
    <AdminContentLayout
      title="Properties"
      subtitle="Manage your properties here."
      action={<AddPropertyBtn />}
      sameLine
    >
      <PropertyList />
    </AdminContentLayout>
  );
};

export default PropertiesPage;
