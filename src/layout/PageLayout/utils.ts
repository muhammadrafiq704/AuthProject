interface UtilsDataProps {
  id: number;
  title: string;
  icon: string;
  href: string;
  accordion?: boolean;
  children?: Omit<UtilsDataProps, "accordion">[];
}

const SidebarData: UtilsDataProps[] = [
  {
    id: 1,
    title: "Dashboard",
    icon: "/assets/SidebarIcons/dashboard.png",
    href: "/dashboard",
  },
  {
    id: 2,
    title: "User",
    icon: "/assets/SidebarIcons/user.png",
    href: "/user",
    accordion: true,
    children: [
      {
        id: 2.1,
        title: "Tenant Accounts",
        icon: "/assets/SidebarIcons/user.png",
        href: "/tenantAccounts",
      },
      {
        id: 2.2,
        title: "Landlord Accounts",
        icon: "/assets/SidebarIcons/user.png",
        href: "/landlordAccounts",
      },
    ],
  },
  {
    id:3,
    title: "Property",
    icon: "/assets/SidebarIcons/property.png",
    href:'/proerty',
    accordion: true,
    children: [
      {
        id: 3.1,
        title: "Property A",
        icon: "/assets/SidebarIcons/property.png",
        href: "/propertyA",
      },
    ],
  },
  {
    id:4,
    title: "Open Houses",
    icon: "/assets/SidebarIcons/openhouses.png",
    href:'/open-houses'
  },
  {
    id: 5,
    title: "Chat",
    icon: "/assets/SidebarIcons/chat.png",
    href:'/chat'
    // chevDown: "",
  },
  {
    id:6,
    title: "Maintenance",
    icon: "/assets/SidebarIcons/maintenance.png",
    href:'/maintenance',
    accordion: true,
    children: [
      {
        id: 6.1,
        title: "Maintenance A",
        icon: "/assets/SidebarIcons/maintenance.png",
        href: "/maintenanceA",
      },
    ],
  },
  {
    id:7,
    title: "Customer Support",
    icon: "/assets/SidebarIcons/customersupport.png",
    href:'/customer-support',
    accordion: true,
    children: [
      {
        id: 7.1,
        title: "Customer Support A",
        icon: "/assets/SidebarIcons/customersupport.png",
        href: "/customer-supportA",
      },
    ],
  },
  {
    id:8,
    title: "FAQs",
    icon: "/assets/SidebarIcons/faqs.png",
    href:'/faqs'
  },
  {
    id:9,
    title: "Terms and Services",
    icon: "/assets/SidebarIcons/termsofservices.png",
    href:'terms-and-conditions'
  },
  {
    id:10,
    title: "Privacy Policy",
    icon: "/assets/SidebarIcons/privacypolicy.png",
    href:'/privacy-policy'
  },
];
export default SidebarData;
