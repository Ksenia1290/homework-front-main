import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

type AddressType = {
  street: string, 
  city: string, 
};

type UserType = {
  id: number,
  name: string,
  age: number, 
  address:AddressType[]
};

type UserListPropsType = {
  users: any ,
};

export const UserList = (props: UserListPropsType) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

      <ul>
        {props.users.map((user: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; age: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; address: { street: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; city: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }; }) => ( 
          <li key={user.id} id={`hw01-user-${user.id}`}>
            <strong>{user.name}</strong> (Age: {user.age})<strong> Address:</strong>
            {user.address.street}, {user.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
};
