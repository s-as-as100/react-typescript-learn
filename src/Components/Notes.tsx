import React from "react";
import { ChangeEventHandler } from "react";
// typescript is static type
//it's just JavaScript, with static typing.

const Notes = () => {
  function passValue(data: String) {
    console.log("value", data);
    data.toLowerCase();
  }

  // interface in typescript
  // suppose you have have function which recieved some argumnet you define the type of argument

  const interValue: (a: String, b: Number, c: Boolean) => void = (
    a,
    b,
    c
  ) => {};
  // which type of data type is return by this function -- > if we say is void -->
  // --> nothing is return

  // what is interface --> is define which type of data type of key value pair

  // one way
  // interface ISearchProps extends IchangeHandleProps {
  //     className:string,
  //     placeholder:string,

  // }
  // interface IchangeHandleProps {
  //     onChangeHandle : (a: string) => void
  // }

  // 2nd way
  interface ISearchProps {
    onChangeHandle: (a: string) => void;
  }

  // one another way is type

  type SearchBoxProps = {
    className: string;
    placeholder?: string | null;

    onChangeHandle: ChangeEventHandler<HTMLInputElement>;
  };

  // difference between type and interface is
  // Interface should be extends
  // type --> Combination of type
  // type --> u can use multiple type union

  // if u are using functional type programming u can used type and if ur component
  // is class based then u can use interface


  type EastDelhi = {
    streetNumber: string;
    pincode: number;
    address: string;
  };

  type WestDelhi = {
    streetNumber: string;
    galiNumber: string;
  };

  type addressEastAndWest = EastDelhi | WestDelhi;

  const address: addressEastAndWest = {
    streetNumber: "heelo",
    galiNumber: "gali number",
  };

  const SearchComponent = ({
    className,
    placeholder,
    onChangeHandle,
  }: SearchBoxProps) => {
    return (
      <input
        className={className}
        placeholder={placeholder}
        // onChange={(e) =>onChangeHandle(e)}
        onChange={onChangeHandle}
      />
    );
  };

  return (
    <div>
      <h1 onClick={() => passValue("hee")}>hello</h1>
    </div>
  );
};

export default Notes;
