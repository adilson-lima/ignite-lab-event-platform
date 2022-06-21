import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { client } from "./lib/apollo";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery(GET_LESSONS_QUERY);

  console.log(data);

  return (
    <ul>
      {data?.lessons.map(({ id, title }: Lesson) => {
        return <li key={id}>{title}</li>;
      })}
    </ul>
  );
}

export default App;
