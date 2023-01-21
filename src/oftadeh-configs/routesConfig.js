import React from "react";
import { Redirect } from "react-router-dom";

import { DashboardPageConfig } from "../pages/dashboard/DashboardPageConfig";
import { AboutPageConfig } from "../pages/about/AboutPageConfig";
import { AddCustomerPageConfig } from "../pages/posts/add-customer/AddCustomerPageConfig";
import { CustomerPageConfig } from "../pages/customers/CustomerPageConfig";
import { AllMoversPageConfig } from "../pages/posts/movers/AllMoversPageConfig";
import { AllCourierPageConfig } from "../pages/posts/courier/AllCourierPageConfig";
import { AllVehiclePageConfig } from "../pages/posts/vehicle/AllVehiclePageConfig";
import { AllCategoryPageConfig } from "../pages/posts/category/AllCategoryPageConfig";
import { AllStoragePageConfig } from "../pages/posts/storage/AllStoragePageConfig";
import { AppliancePageConfig } from "../pages/posts/appliance/AppliancePageConfig";
import { AllAppliancePageConfig } from "../pages/All Appliance/AllAppliancePageConfig";
import { CityPageConfig } from "../pages/posts/city/CityPageConfig";
import { BannerPageConfig } from "../pages/posts/banner/BannerPageConfig";
import { InvoicePageConfig } from "../pages/posts/invoice/InvoicePageConfig";
import { AllTestimonialsConfig } from "../pages/posts/testimonial/AllTestimonialsConfig";
import { OrderRevnueConfig } from "../pages/posts/order-revnue/OrderRevnueConfig";
import { ReportConfig } from "../pages/posts/report/ReportConfig";
import { ForgotPasswordPageConfig } from "../pages/auth/forgot-password/ForgotPasswordPageConfig";


import { LoginPageConfig } from "../pages/auth/login/LoginPageConfig";


import { FLoginconfic } from "../pages/auth/FLogin/FLoginconfic";


import { RegisterPageConfig } from "../pages/auth/register/RegisterPageConfig";
import { ProfileConfig } from "../pages/auth/profile/ProfileConfig";
import { Error404PageConfig } from "../pages/errors/404/Error404PageConfig";
import { Error500PageConfig } from "../pages/errors/500/Error500PageConfig";
// import { DocumentationConfig } from "../pages/documentation/DocumentationConfig";

const routeConfigs = [
  ...DashboardPageConfig.routes,
  ...AddCustomerPageConfig.routes,
  ...AllMoversPageConfig.routes,
  ...AllCourierPageConfig.routes,
  ...AllVehiclePageConfig.routes,
  ...AllCategoryPageConfig.routes,
  ...AllStoragePageConfig.routes,
  ...AppliancePageConfig.routes,
  ...AllAppliancePageConfig.routes,
  ...CityPageConfig.routes,
  ...BannerPageConfig.routes,
  ...InvoicePageConfig.routes,
  ...AllTestimonialsConfig.routes,
  ...OrderRevnueConfig.routes,
  ...ReportConfig.routes,
  ...CustomerPageConfig.routes,
  ...ForgotPasswordPageConfig.routes,
  ...LoginPageConfig.routes,
  ...FLoginconfic.routes,
  ...RegisterPageConfig.routes,
  ...ProfileConfig.routes,
  ...Error404PageConfig.routes,
  ...Error500PageConfig.routes,
  ...AboutPageConfig.routes,
  // ...DocumentationConfig.routes
];

const routes = [
  ...routeConfigs,
  {
    component: () => <Redirect to="/pages/errors/error-404" />,
  },
  // {
  //   path: "/test",
  //   exact: true,
  //   component: <Example />
  // }
];

export default routes;
