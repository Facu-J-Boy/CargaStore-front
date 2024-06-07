import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../Layouts/LayoutPublic";
import NotFound from "../Pages/PageNotFound";
import PageLogin from "../Pages/PageLogin";
import PageRedirect from "../Pages/PageRedirect";
import LayoutLogin from "../Layouts/LayoutLogin";
import CompForgotPassword from "../Components/ForgotPassword/CompForgotPassword";
import CompVerificationCode from "../Components/VerificationCode/CompVerificationCode";
import CompNewPassword from "../Components/NewPassword/CompNewPassword";
import PageLanding from "../Pages/PageLanding";
import PageRegister from "../Pages/PageRegister";
import LayoutRegister from "../Layouts/LayoutRegister";
import CompRegDriver from "../Components/RegisterDriver/CompRegDriver";
import CompVehicleInfo from "../Components/VehicleInfo/CompVehicleInfo";
import CompRegUser from "../Components/RegisterUser/CompRegUser";
import CompCompanyInfo from "../Components/CompanyInfo/CompCompanyInfo";
import LayoutConfi from "../Layouts/LayoutConfi";
import { CompEdit } from "../Components/CompEdit/CompEdit";
import CompEditTwo from "../Components/CompEditTwo/CompEditTwo";
import { CompEditThree } from "../Components/CompEditThree/CompEditThree";
import LayoutPartners from "../Layouts/LayoutPartners";
import { CompPartners } from "../Components/Partners/CompPartners";
import { CompCard } from "../Components/cards/CompCard";
import { CompRequests } from "../Components/Requests/CompRequests";
import { CompProfile } from "../Components/Profile/CompProfile";
import LayoutHome from "../Layouts/LayoutHome";
import PageCrearEnvios from "../Pages/PageCrearEnvios";
import PageMarketplace from "../Pages/PageMarketplace";
import PagePerfil from "../Pages/PagePerfil";
import PageAdminPanel from "../Pages/PageAdminPanel";
import CargaPage from "../Pages/CargaPage";
import PageAdminPerfil from "../Pages/PageAdminPerfil";
import CompPending from "../Components/Shipments/Pending/CompPending";
import CompPendingPayment from "../Components/AdminPayment/CompPendingPayment";
import LayoutAdminPayment from "../Layouts/LayoutAdminPayment";
import CompAcreditedPayment from "../Components/AdminPayment/CompAcreditedPayment";
import { CompMarketplacePostular } from "../Components/MarketPlacePostular/CompMarketplacePostular";
import { CompCompletedTrips } from "../Components/CompletedTrips/CompCompletedTrips";
import LayoutHome from "../Layouts/LayoutHome";
import PageHome from "../Pages/PageHome";
import PageMarketplace from "../Pages/PageMarketplace";
import PagePerfil from "../Pages/PagePerfil";
import PageAdminPanel from "../Pages/PageAdminPanel";
import CargaPage from "../Pages/CargaPage";
import LayoutShipments from "../Layouts/LayoutShipments";
import CompAssigned from "../Components/Shipments/Assigned/CompAssigned";
import CompInProgress from "../Components/Shipments/InProgress/CompInProgress";
import CompSent from "../Components/Shipments/Sent/CompSent";
import PageShipments from "../Pages/PageShipments";
import PageEditarEnvio from "../Pages/PageEditarEnvio";
import { CompPublication } from "../Components/Publication/CompPublication";
import { CompDashboard } from "../Components/Dashboard/CompDashboard";

export const router = createBrowserRouter([
  {
    path: "/landing",
    element: <PageLanding />,
  },
  {
    path: "/login",
    element: <LayoutLogin />,

    children: [
      { index: true, element: <PageLogin /> },
      { path: "forgot-password", element: <CompForgotPassword /> },
      { path: "verification-code", element: <CompVerificationCode /> },
      { path: "new-password", element: <CompNewPassword /> },
    ],
  },
  {
    path: "/perfil",
    element: <PagePerfil />,
  },
  {
    path: "/register",
    element: <LayoutRegister />,
    children: [
      { index: true, element: <PageRegister /> },
      { path: "driver", element: <CompRegDriver /> },
      { path: "driver/vehicle-info", element: <CompVehicleInfo /> },
      { path: "user", element: <CompRegUser /> },
      { path: "user/company-info", element: <CompCompanyInfo /> },
    ],
  },
  {
    path: "/home",
    element: <LayoutHome />,
    children: [
      { index: true, element: <PageHome /> },
      { path: "administrador/panel", element: <PageAdminPanel /> },
      { path: "administrador/carga", element: <CargaPage /> },
      //en administrador carga, cuando tengamos datos se toma la carga por id de url url/administrador/carga:idCarga
      { path: "administrador/perfil", element: <PageAdminPerfil /> },

      { path: "crearEnvios", element: <PageCrearEnvios /> },
      { path: "editarEnvio", element: <PageEditarEnvio /> },
      { path: "Marketplace", element: <PageMarketplace /> },
      {
        path: "marketplace/postular",
        element: <CompMarketplacePostular />,
      },
    ],
  },
  {
    path: "/shipments",
    element: <PageShipments />,
    children: [
      { index: true, element: <CompPending /> },
      { path: "assigned", element: <CompAssigned /> },
      { path: "in-progress", element: <CompInProgress /> },
      { path: "finished", element: <CompSent /> },
    ],
  },
  {
    path: "/payment",
    element: <LayoutAdminPayment />,
    children: [
      { index: true, element: <CompPendingPayment /> },
      { path: "acredited", element: <CompAcreditedPayment /> },
    ],
  },

  {
    path: "/",
    element: <PageRedirect />,
  },
  {
    path: "/config",
    element: <LayoutConfi />,
    children: [
      { path: "Datos personales", element: <CompEdit /> },
      { path: "Configuración de cuenta", element: <CompEditTwo /> },
      { path: "Configuración de pagos", element: <CompEditThree /> },
      { path: "Historial de pagos", element: <CompCard /> },
    ],
  },
  {
    path: "/partners",
    element: <LayoutPartners />,
    children: [
      { path: "Solicitudes de carga", element: <CompRequests /> },
      { path: "Socios activos", element: <CompPartners /> },
    ],
  },
  {
    path: "/profile",
    element: <CompProfile />,
  },
  {
    path: "/publication",
    element: <CompPublication />,
  },
  {
    path: "/dashboard",
    element: <CompDashboard />,
  },
  {
    path: "completedtrips",
    element: <CompCompletedTrips />,
  },
]);
