const courierNav = [
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
              id: "Courier",
              title: "Courier",
              type: "item",
              url: "/pages/courier",
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
            // {
            //   id: "Categories",
            //   title: "Categories",
            //   type: "item",
            //   url: "/pages/main-categories",
            //   exact: true,
            // },
            // {
            //   id: "Appliance",
            //   title: " Appliance",
            //   type: "item",
            //   url: "/pages/posts/appliance",
            //   exact: true,
            // },
            // {
            //   id: "City",
            //   title: " City",
            //   type: "item",
            //   url: "/pages/city-information",
            //   exact: true,
            // },
            // {
            //   id: "Banner",
            //   title: " Banner",
            //   type: "item",
            //   url: "/pages/banner",
            //   exact: true,
            // },
            {
              id: "Manage Invoice",
              title: " Manage Invoice",
              type: "item",
              url: "/pages/invoice",
              exact: true,
            },
            // {
            //   id: "Testimonial ",
            //   title: "Testimonial ",
            //   type: "item",
            //   url: "/pages/testimonial",
            //   exact: true,
            // },
          ],
        },
      ],
    },
    // {
    //   id: "All Appliance",
    //   title: "All Appliance",
    //   type: "item",
    //   icon: "description",
    //   url: "/pages/all-appliance",
    //   exact: true,
    // },
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
  
  export default courierNav;
  