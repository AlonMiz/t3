import { api } from "../../utils/api";

export const List = () => {
  const utils = api.useContext();
  const { data, isFetching } = api.example.getAll.useQuery();
  const { mutate } = api.example.create.useMutation({
    onSuccess: () => {
      return utils.example.getAll.invalidate();
    },
  });

  if (isFetching) return <div>Loading...</div>;

  return (
    <div>
      <h1>List</h1>
      <button onClick={() => mutate({ id: "2" })}>Create</button>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
