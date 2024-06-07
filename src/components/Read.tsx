import { useDeleteUserMutation, useGetUserQuery } from "../redux/APIfeaturesRTKQuery/usersSlice";
// import { TestComp as CustomName } from "./TestComp";

const Read = () => {
  const obj = useGetUserQuery();
  const { data, currentData } = obj;

  const [deleteUser]=useDeleteUserMutation();

  console.log("useGetUserQuery object:", obj);
  if (obj.isSuccess) {
    console.log("useGetUserQuery data:", data);
    console.log("useGetUserQuery Current data:", currentData);
    console.log(`
      'data' - The latest returned result regardless of hook arg, if present.
      'currentData' - The latest returned result for the current hook arg, if present.
      `);
  }

  const deleteUserFunc=async(id:string)=>{
    console.log("ID: ",id)
    console.log("typeof ID: ",typeof id)

    await deleteUser(id)
  }
  return (
    <div>
      Read data component
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {obj.status ? "fulfilled..." : "Not found"}
        {obj.isLoading ? (
          "Loading..."
        ) : obj.status === "fulfilled" ? (
          data && data?.length>0 && data?.map((user) => {
            return (
              <div
                style={{
                  border: "1px solid lightyellow",
                  margin: "10px",
                  borderRadius: "10px",
                  width: "100%",
                }}
                key={user.id === "NaN" ? Math.random() : user.id}
              >
                <div>Id: {user.id}</div>
                <div>Name: {user.name}</div>
                <div>Age: {user.age}</div>
                <button onClick={()=>deleteUserFunc(user.id)}>Delete the user</button>
              </div>
            );
          })
        ) :(
          <h1>Create user</h1>
        )}
      </div>
      {/* <CustomName /> */}
    </div>
  );
};

export default Read;
