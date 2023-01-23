// import { MaterialUIComponentsNavigation } from "../pages/documentation/material-ui-components/MaterialUIComponentsNavigation";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

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
            id: "Mover",
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

  // {
  //   id: "Pages",
  //   title: "Pages",
  //   type: "group",
  //   children: [
  //     {
  //       id: "Authenticate",
  //       title: "Authenticate",
  //       type: "collapse",
  //       icon: "lock",
  //       children: [
  //         // {
  //         //   id: "Login",
  //         //   title: "Login",
  //         //   type: "item",
  //         //   url: "/pages/auth/login",
  //         //   exact: true,
  //         // },
  //         {
  //           id: "Login",
  //           title: "Login",
  //           type: "item",
  //           url: "/pages/auth/login",
  //           exact: true,
  //         },
  //         {
  //           id: "Register",
  //           title: "Register",
  //           type: "item",
  //           url: "/pages/auth/register",
  //           exact: true,
  //         },
  //         {
  //           id: "Forgot Password",
  //           title: "Forgot Password",
  //           type: "item",
  //           url: "/pages/auth/forgot-password",
  //           exact: true,
  //         },
  //         {
  //           id: "Profile",
  //           title: "Profile",
  //           type: "item",
  //           url: "/pages/auth/profile",
  //           exact: true,
  //         },
  //       ],
  //     },
  //     // {
  //     //   id: "About",
  //     //   title: "About",
  //     //   type: "item",
  //     //   icon: "description",
  //     //   url: "/pages/about",
  //     //   exact: true,
  //     // },
  //     // {
  //     //   id: "Errors",
  //     //   title: "Errors",
  //     //   type: "collapse",
  //     //   icon: "warning",
  //     //   badge: {
  //     //     title: "new",
  //     //     bg: "#513E8A",
  //     //     fg: "#FFFFFF",
  //     //   },
  //     //   children: [
  //     //     {
  //     //       id: "404",
  //     //       title: "404",
  //     //       type: "item",
  //     //       url: "/pages/errors/error-404",
  //     //       exact: true,
  //     //     },
  //     //     {
  //     //       id: "500",
  //     //       title: "500",
  //     //       type: "item",
  //     //       url: "/pages/errors/error-500",
  //     //       exact: true,
  //     //     },
  //     //   ],
  //     // },
  //   ],
  // },
  // {
  //   id: "divider-1",
  //   type: "divider",
  // },
  // {
  //   id: "Documentation",
  //   title: "DOCUMENTATION",
  //   type: "group",
  //   children: [
  //     // {
  //     //   id: "Material UI Components",
  //     //   title: "Material UI Components",
  //     //   type: "collapse",
  //     //   icon: "layers",
  //     //   children: [...MaterialUIComponentsNavigation]
  //     // },
  //     // {
  //     //   id: "Oftadeh - React Admin",
  //     //   title: "Oftadeh - React Admin",
  //     //   type: "link",
  //     //   icon: "link",
  //     //   url: "https://github.com/mohammadoftadeh/oftadeh-react-admin",
  //     //   exact: true,
  //     // },
  //   ],
  // },
  // {
  //   id: "dashboard",
  //   title: "Dashboard",
  //   type: "item",
  //   icon: "dashboard",
  //   url: "/",
  //   exact: true
  // },
  // {
  //   id: "pages",
  //   title: "Pages",
  //   type: "group",
  //   icon: "pages",
  //   children: [
  //     {
  //       id: "all pages",
  //       title: "Pages",
  //       type: "collapse",
  //       icon: "stars",
  //       badge: {
  //         title: "new",
  //         bg: "#525E8A",
  //         fg: "#FFFFFF"
  //       },
  //       children: [
  //         {
  //           id: "about",
  //           title: "About",
  //           type: "item",
  //           icon: "info",
  //           url: "/pages/about",
  //           exact: true
  //         },
  //         {
  //           id: "contact",
  //           title: "Contact",
  //           type: "item",
  //           icon: "group",
  //           url: "/pages/contact",
  //           exact: true
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: "divider-1",
  //   type: "divider"
  // },
  // {
  //   id: "oftadeh-github",
  //   title: "Oftadeh Github",
  //   type: "link",
  //   icon: "link",
  //   url: "https://github.com/mohammadoftadeh",
  //   target: "_blank",
  //   badge: {
  //     title: "git",
  //     bg: "green",
  //     fg: "#FFFFFF"
  //   }
  // }
];

export default navigationConfig;
