import { Outlet } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  background-color: var(--grey-10);
  height: 100vh;

  overflow: hidden;

  .headerContainer {
    overflow: hidden;
    height: 100%;
  }

  .dashboard-root {
    overflow: auto;
    height: 100%;
    padding-top: 1.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 5rem;
  }

  .dashboard-page {
    width: 100%;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    aside {
      display: block;
    }
  }
`;

const DashboardLayout = () => {
  return (
    <Wrapper>
      <aside>
        <Sidebar />
      </aside>

      <div className="headerContainer">
        <header>
          <Header />
        </header>

        <div className="dashboard-root">
          <main className="dashboard-page">
            <Outlet />
          </main>
        </div>
      </div>
    </Wrapper>
  );
};
export default DashboardLayout;
