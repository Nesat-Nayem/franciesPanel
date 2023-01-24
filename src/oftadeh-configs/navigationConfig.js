const navigationConfig = [
  {
    id: "Main",
    title: "MAIN",
    type: "group",
    children: [
      {
        id: "dashboard",
        title: "Dashboard",
        type: "item",
        icon: "apps",
        url: "/dashboard",
        exact: true,
      },
      {
        id: "Customers",
        title: "Customers",
        type: "item",
        icon: "stars",
        url: "/pages/customers",
        exact: true,
      },

      {
        id: "Services",
        title: "Services",
        type: "collapse",
        icon: "file_copy",
        children: [
       
          {
            id: "mover",
            title: "Movers",
            type: "collapse",
            icon: "account_balance_wallet_icon",
            children: [
              {
                id: "HomeRelocation",
                title: "Home Relocation",
                type: "item",
                url: "/pages/homeRelocation",
                exact: true,
              },
              {
                id: "OfficeRelocation",
                title: "Office Relocation",
                type: "item",
                url: "/pages/officeRelocation",
                exact: true,
              },
            ],
          },

      

          {
            id: "Storage",
            title: "Storage",
            type: "collapse",
            icon: "auto_awesome_motion_icon",
            children: [
              {
                id: "ResidentialStorage",
                title: "Residential Storage",
                type: "item",
                url: "/pages/residentialStorage",
                exact: true,
              },
              {
                id: "CommercialStorage",
                title: "Commercial Storage",
                type: "item",
                url: "/pages/commercialStorage",
                exact: true,
              },
            ],
          },
          {
            id: "Courier",
            title: "Courier",
            type: "item",
            url: "/pages/courier",
            exact: true,
          },
          {
            id: "Vehicle Shipping",
            title: "Vehicle Shipping",
            type: "item",
            url: "/pages/vehicle-shipping",
            exact: true,
          },
        ],
      },
      {
        id: "WorkSpace",
        title: "WorkSpace",
        type: "collapse",
        icon: "layers",
        children: [
          {
            id: "Categories",
            title: "Categories",
            type: "item",
            url: "/pages/main-categories",
            exact: true,
          },
          {
            id: "Appliance",
            title: " Appliance",
            type: "item",
            url: "/pages/posts/appliance",
            exact: true,
          },
          {
            id: "City",
            title: " City",
            type: "item",
            url: "/pages/city-information",
            exact: true,
          },
          {
            id: "Banner",
            title: " Banner",
            type: "item",
            url: "/pages/banner",
            exact: true,
          },
          {
            id: "Manage Invoice",
            title: " Manage Invoice",
            type: "item",
            url: "/pages/invoice",
            exact: true,
          },
          {
            id: "Testimonial ",
            title: "Testimonial ",
            type: "item",
            url: "/pages/testimonial",
            exact: true,
          },
        ],
      },
    ],
  },
  {
    id: "All Appliance",
    title: "All Appliance",
    type: "item",
    icon: "description",
    url: "/pages/all-appliance",
    exact: true,
  },
  {
    id: "Accounting",
    title: "Accounting",
    type: "collapse",
    icon: "layers",

    children: [
      {
        id: "Order-Revenue",
        title: "Order-Revenue",
        type: "item",
        url: "/pages/order-revenue",
        exact: true,
      },
      {
        id: "Report",
        title: " Report",
        type: "item",
        url: "/pages/report",
        exact: true,
      },
    ],
  },
];

export default navigationConfig;
