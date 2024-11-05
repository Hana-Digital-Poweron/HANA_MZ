import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 온보딩
import Onboarding from "./pages/Onboarding/OnboardingPage";
import Login from "./pages/Onboarding/LoginPage";

// 메인, 메뉴
import Main from "./pages/Main/MainPage";
import Menu from "./pages/Menu/MenuPage";

// 챗봇
import Salary from "./pages/Chatbot/1_Salary/SalaryPage";
import Consult from "./pages/Chatbot/2_Consult/ConsultPage";
import Contract from "./pages/Chatbot/3_Contract/ContractPage";
import InternationalSend from "./pages/Chatbot/4_InternationalSend/InternationalSendPage";
import AccountsOverviewPage from "./pages/Chatbot/1_Salary/AccountsOverviewPage";
import AccountDetailPage from "./pages/Chatbot/1_Salary/AccountDetailPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />

        <Route path="/main" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/account-overview" element={<AccountsOverviewPage />} />
        <Route path="/account-detail" element={<AccountDetailPage />} />

        <Route path="/salary" element={<Salary />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/international-send" element={<InternationalSend />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
