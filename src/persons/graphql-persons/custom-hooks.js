import { useMutation, useQuery } from "@apollo/client";
import { ALL_PERSONS } from "./queries";
import { CREATE_PERSON, EDIT_NUMBER } from "./mutations";
import { useState } from "react";


export const usePersons = () => {
  const result = useQuery(ALL_PERSONS);
  return result;
};


export const useCreatePerson = () => {
  const [errorMsg, setErrorMsg] = useState(null);

  const [createPerson] = useMutation(CREATE_PERSON, {
    refetchQueries: [{ query: ALL_PERSONS }],
    onError: (error) => {
      const errorMessage = error.graphQLErrors[0].message;
      setErrorMsg(errorMessage);
      console.log("here", errorMessage)
    },
    onCompleted: () => {
      console.log("Refetched user list");
    },
  });

  const clearError = () => {
    setTimeout(() => {
      setErrorMsg(null);
    }, 5000)
  };

  return { createPerson, errorMsg, clearError };
};


export const useEditNumber = () => {
   const [editNumber] = useMutation(EDIT_NUMBER);

   return editNumber;
}


