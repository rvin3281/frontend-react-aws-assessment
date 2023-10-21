import styled from "styled-components";
import ViewAllUserList from "./ViewAllUserList";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  .allUserWrap {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .totalCountStyle {
    h5 {
      font-size: 26px;
      font-weight: 600;
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1rem;

  > * {
  }
`;

const ViewAllUser = ({ allUser, totalCount, numOfpages }) => {
  return (
    <Wrapper className="container">
      <div className="allUserWrap">
        <div className="totalCountStyle">
          <h5>
            {totalCount} user{totalCount > 1 && "s"}
          </h5>
        </div>
        <Row className="row">
          {allUser.map((user) => {
            return <ViewAllUserList key={user.id} {...user} />;
          })}
        </Row>
        {numOfpages > 1 && <Pagination />}
      </div>
    </Wrapper>
  );
};
export default ViewAllUser;
