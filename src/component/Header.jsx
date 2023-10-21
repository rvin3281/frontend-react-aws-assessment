import { FaAlignLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { toggleShowSidebar } from "../slices/dashboardSlice";

const HeaderContainer = styled.div`
  background-color: var(--grey-100);
  width: 100%;
  padding: 1rem;

  .headerWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .headerToggle {
    cursor: pointer;
    font-size: 1.75rem;
    color: var(--primary-300);
  }

  .headerLogout {
    button {
      border: 0;
      padding: 0.5rem 0.8rem;
      text-transform: capitalize;
      font-size: 12px;
      border-radius: 5px;
      background-color: var(--primary-300);
    }
  }
`;

const Header = () => {
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(toggleShowSidebar());
  };

  return (
    <HeaderContainer>
      <div className="headerWrapper">
        <button onClick={handleSidebar} className="headerToggle">
          <FaAlignLeft />
        </button>
        <div className="headerTitle">
          <h4>My Dashboard</h4>
        </div>
        <div className="headerLogout">
          <button>Logout</button>
        </div>
      </div>
    </HeaderContainer>
  );
};
export default Header;
