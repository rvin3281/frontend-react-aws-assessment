import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import { toggleShowSidebar } from "../slices/dashboardSlice";
import { Link } from "react-router-dom";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;
  height: 100%;

  background-color: var(--grey-200);
  overflow-y: auto;
  transition: margin-left 0.3s ease-in-out;

  .sidebarTitle {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1.5rem 0.5rem;
    text-align: center;
    font-size: 20px;

    button {
      display: block;
    }
  }

  .sidebarContent {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
  }

  .sidebarItem {
    width: 100%;

    a {
      width: 100%;
      display: block;
      padding: 1rem 0;
      border: 0;
      background-color: var(--grey-300);
      font-size: 16px;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    width: 200px;
    position: absolute;
    &.toggleFalse {
      margin-left: 0;
    }
    &.toggleTrue {
      margin-left: -200px;
    }

    /* margin-left: ${(props) => (props.sidebar ? "-250px" : 0)}; */
  }

  @media (min-width: 768px) {
    .sidebarTitle {
      button {
        display: none;
      }
    }
    width: 250px;
    &.toggleTrue {
      margin-left: 0;
    }
    &.toggleFalse {
      margin-left: -250px;
    }
  }

  @media (min-width: 992px) {
    width: 300px;
    &.toggleTrue {
      margin-left: 0;
    }
    &.toggleFalse {
      margin-left: -300px;
    }
  }
`;

const Sidebar = () => {
  const sidebar = useSelector((state) => state.dashboard.toggleSidebar);

  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(toggleShowSidebar());
  };

  return (
    <SidebarContainer className={sidebar ? "toggleFalse" : "toggleTrue"}>
      <div className="sidebarTitle">
        <h3>Dashboard</h3>

        <button onClick={handleSidebar}>
          <AiFillCloseCircle />
        </button>
      </div>
      <div className="sidebarContent">
        <div className="sidebarItem">
          <Link to="/dashboard">Add New User</Link>
        </div>
        <div className="sidebarItem">
          <Link to="viewuser">View All User</Link>
        </div>
      </div>
    </SidebarContainer>
  );
};
export default Sidebar;
