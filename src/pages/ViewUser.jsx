import ViewAllUser from "../feature/User/ViewAllUser";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import baseUrl from "../utils/baseURL";
import { useEffect } from "react";
import { setUser } from "../slices/dashboardSlice";
import { useLoaderData } from "react-router-dom";

const allUserQuery = (params) => {
  const { page } = params;

  return {
    queryKey: ["allusers", page ?? 1],
    queryFn: async () => {
      const { data } = await baseUrl.get("/users", { params });
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    await queryClient.ensureQueryData(allUserQuery(params));

    return { searchValues: params };
  };

const ViewUser = () => {
  const { searchValues } = useLoaderData();

  const { data } = useQuery(allUserQuery(searchValues));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser(data));
  }, [dispatch, data]);

  // if (isLoading) {
  //   return <h3>Loading...</h3>;
  // }

  return (
    <>
      <ViewAllUser
        allUser={data?.data}
        totalCount={data?.count}
        numOfpages={data?.numOfpages}
      />
    </>
  );
};
export default ViewUser;
