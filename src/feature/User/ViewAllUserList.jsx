import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import baseUrl from "../../utils/baseURL";
const Column = styled.div`
  flex: 0 0 auto;
  width: 100%;
  padding: 0.2rem;
  max-width: 100%;
  /* flex-shrink: 0; */

  @media (min-width: 1024px) {
    width: 50%;
  }

  @media (min-width: 1200px) {
    width: 33.333333%;
  }
`;

const Box = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  gap: 1rem;

  h3 {
    font-size: 20px;
    font-weight: 600;
  }

  .userDetail {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .userAction {
    display: flex;
    gap: 0.2rem;

    a {
      color: white;
      padding: 0.5rem 1.5rem;
      background-color: red;
      transition: 0.3s ease-in-out all;

      &:hover {
        background-color: #ffcbcb;
        color: black;
      }
    }

    button {
      color: white;
      padding: 0.5rem 1.5rem;
      background-color: red;
      transition: 0.3s ease-in-out all;

      &:hover {
        background-color: #ffcbcb;
        color: black;
      }
    }
  }
`;

const ViewAllUserList = ({ id, username, hobby, skillset }) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: async (id) => {
      return await baseUrl.delete(`/users/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allusers"] });
      toast.success("Successfully Deleted");
    },
    onError: (error) => {
      toast.error("Not able to delete");
      console.log(error);
    },
  });

  const handleDelete = () => {
    mutate(id);
  };

  return (
    <Column className="col-sm-4">
      <Box className="box">
        <div className="userName">
          <h3>{username}</h3>
        </div>
        <div className="userDetail">
          <p>{skillset}</p>
          <p>{hobby}</p>
        </div>
        <div className="userAction">
          <Link to={`/dashboard/edit-job/${id}`}>Edit</Link>

          <button onClick={handleDelete}>Delete</button>
        </div>
      </Box>
    </Column>
  );
};
export default ViewAllUserList;
