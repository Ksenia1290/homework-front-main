type AddressType = {
  street: string; // ПОДПРАВЛЯЕМ any
  city: string; // ПОДПРАВЛЯЕМ any
};

type UserType = {
 map(arg0: (el: UserType, index: number) => import("react/jsx-runtime").JSX.Element): unknown;
 id: number;
 name: string;
 age: number;
 address: Array<AddressType>; // ПРИДЕТСЯ САМОМУ)
};

type UserListPropsType = {
  users: UserType [];
  user:any;
   // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList = (props: UserListPropsType) => {

  const users = props.users.map((el:UserType, index: number) => {// ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
    return(
     <li key={el.id} id={`hw01-user-${el.id}`}>
     <strong>{el.name}</strong> (Age: {el.age})<strong> Address:</strong>
     {props.user.address.street}, {props.user.address.city}
    </li>
    )
    })
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

      <ul>
          {users}
      </ul>
    </div>
  );
};
