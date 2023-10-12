import Signup from "../Authentication/Signup";
import Layout from "../Layout";
import Contact from "../Pages/Contact";
import Privacy from "../Pages/Privacy-Policy";
import Rdrawer2 from "../Pages/Rdrawer/Rdrawer2";
import Rdrawer3 from "../Pages/Rdrawer/rdrawer3";
import Refund from "../Pages/Refund-Policy";
import Searchnav from "../Pages/Searchnav";
import Shipping from "../Pages/Shipping-Policy";
import Terms from "../Pages/Terms-Of-Services";
import TrackOrder from "../Pages/TrackOrder";
import IslamicProducts from "../Shared/Cards/IslamicClock/IslamicProducts";
import MetalProducts from "../Shared/Cards/MetalArt/MetalProducts";
import ProductDetails from "../Shared/Cards/ProductDetails";
import TotalProducts from "../Shared/Cards/TatalCards/TotalProducts";
import WoodenProducts from "../Shared/Cards/WoodenClock/WoodenProducts";
import Home from "../Shared/Home";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <Layout component={<Home />} />,
  },
  {
    id: 2,
    path: "/home",
    element: <Layout component={<Home />} />,
  },
  {
    id: 3,
    path: "/islamic",
    element: <Layout component={<IslamicProducts />} />,
  },
  {
    id: 4,
    path: "/product/:id/:name",
    element: <Layout component={<ProductDetails />} />,
  },
  {
    id: 5,
    path: "/metal",
    element: <Layout component={<MetalProducts />} />,
  },
  {
    id: 6,
    path: "/wooden",
    element: <Layout component={<WoodenProducts />} />,
  },
  {
    id: 7,
    path: "/totalproducts",
    element: <Layout component={<TotalProducts />} />,
  },
  {
    id: 8,
    path: "/signup",
    element: <Layout component={<Signup />} />,
  },
  {
    id: 9,
    path: "/trackorder",
    element: <TrackOrder />,
  },
  {
    id: 10,
    path: "/contact",
    element: <Layout component={<Contact />} />,
  },
  {
    id: 11,
    path: "/drawer2",
    element: <Layout component={<Rdrawer2 />} />,
  },
  {
    id: 12,
    path: "/drawer3",
    element: <Layout component={<Rdrawer3 />} />,
  },
  {
    id: 13,
    path: "/search",
    element: <Layout component={<Searchnav />} />,
  },
  {
    id: 14,
    path: "/shipping-policy",
    element: <Layout component={<Shipping />} />,
  },
  {
    id: 15,
    path: "/refund-policy",
    element: <Layout component={<Refund />} />,
  },
  {
    id: 16,
    path: "/privacy-policy",
    element: <Layout component={<Privacy />} />,
  },
  {
    id: 17,
    path: "/terms-of-services",
    element: <Layout component={<Terms />} />,
  },
];
