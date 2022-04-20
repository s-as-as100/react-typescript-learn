import React from "react";

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
interface ISearchProps extends IchangeHandleProps {
    className:string,
    placeholder:string,

    
}
// interface IchangeHandleProps {
//     onChangeHandle : (a: string) => void
// }


// 2nd way
interface ISearchProps {
    onChangeHandle : (a: string) => void 
}


  const SearchComponent = ({ className, placeholder, onChangeHandle } : ISearchProps) => {
    return (
      <input
        className={className}
        placeholder={placeholder}
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
