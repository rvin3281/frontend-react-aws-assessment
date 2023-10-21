import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import baseUrl from "../utils/baseURL";
import EditUserList from "../feature/User/EditUserList";

const editQuery = (id) => {
  return {
    queryKey: ["singleUser", id],
    queryFn: async () => {
      const { data } = await baseUrl.get(`/users/${id}`);
      return data;
    },
  };
};

// Outer Function
export const loader = (queryClient) => {
  // Outer Function Return Inner Function
  return async ({ params }) => {
    const { id } = params;

    await queryClient.ensureQueryData(editQuery(id));

    return id;
  };
};

const EditUser = () => {
  const id = useLoaderData();
  const { data: editUserData } = useQuery(editQuery(id)).data;

  return <EditUserList singleUserData={editUserData} userId={id} />;
};
export default EditUser;
