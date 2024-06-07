/* eslint-disable @typescript-eslint/no-explicit-any */

// After creating a user the data is being fetched automatically , but after updating the user it is not being updated , data is still being fetched automatically , but the user having that id is not getting updated
import { useState } from "react";
import {
  useCreateUserMutation,
  useUpdateUserMutation,
} from "../redux/APIfeaturesRTKQuery/usersSlice";
// import { useNavigate } from "react-router-dom";

//type
export type ageType = number;

export const UserCreateForm = () => {
  const [isUpdateUser, setIsUpdateUser] = useState(false);

  //   const  navigate=useNavigate()
  // const createUserArr=useCreateUserMutation()
  const [createUser] = useCreateUserMutation();
  const [updateUser] = useUpdateUserMutation();
  // **** Alternative of refetch() is using tags (provideTags and invalidate tags to update and refetch the cached data)
  // const {refetch}=useGetUserQuery()
  // console.log("update user array: ",createUserArr)

  const [name, setName] = useState("");
  const [age, setAge] = useState<ageType>(Number(0));
  const [toupdateObjId, setToUpdateObjId] = useState<ageType>(Number(0));

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    console.log(name);
    console.log(age);
    if (isUpdateUser == false && name == "" && age == null) {
      alert("Please enter both age and name");
      return;
    }
    if (isUpdateUser) {
      console.log({
        id: toupdateObjId,
        name,
        age,
      });
      console.log("typeof id: ",typeof toupdateObjId)
      await updateUser({ id: toupdateObjId, name, age });
      return
    }
    if (isNaN(age) || name === "" || age === null) {
      alert("Please enter valid age and name");
      return;
    }
    if (!isUpdateUser) await createUser({ name, age });

    if (isUpdateUser) {
      console.log({
        id: toupdateObjId,
        name,
        age,
      });
      console.log("typeof id: ",typeof toupdateObjId)
      await updateUser({ id: toupdateObjId, name, age });
      return
    }
    // window.location.reload();

    // For updating the cached data after adding a new user , if will automatically refetch the data
    // refetch()
    // navigate("/")
  };

  // console.log("isUpdateUser: ",isUpdateUser)
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: "5px",
          margin: "10px",
        }}
      >
        <button
          onClick={() => setIsUpdateUser(true)}
          style={{
            backgroundColor: isUpdateUser ? "red" : "",
            color: isUpdateUser ? "black" : "",
          }}
        >
          Update user
        </button>
        <button
          onClick={() => setIsUpdateUser(false)}
          style={{
            backgroundColor: !isUpdateUser ? "lightblue" : "",
            color: !isUpdateUser ? "black" : "",
          }}
        >
          Create user
        </button>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: "12px",
        }}
      >
        {isUpdateUser && (
          <input
            placeholder="enter ID"
            type="number"
            value={toupdateObjId===0?"":toupdateObjId}
            onChange={(e) => {
              if(parseInt(e.target.value)<=0) return;
              console.log("initial type: ",typeof e.target.value);
              setToUpdateObjId(parseInt(e.target.value));
            }}
            style={{
              padding: "10px",
              width: "210px",
              borderRadius: "12px",
            }}
          />
        )}
        <input
          placeholder="enter name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          style={{
            padding: "10px",
            width: "210px",
            borderRadius: "12px",
          }}
        />

        <input
          placeholder="enter age"
          type="number"
          value={age || ""}
          onChange={(e) => {
            if (parseInt(e.target.value) <= 0) return;

            setAge(parseInt(e.target.value));
          }}
          style={{
            padding: "10px",
            width: "210px",
            borderRadius: "12px",
          }}
        />

        <button type="submit">
          {isUpdateUser ? "Update user " : "Create User"}
        </button>
      </form>
    </>
  );
};
