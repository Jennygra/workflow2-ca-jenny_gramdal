import ApolloClient, { gql } from "apollo-boost";
import { orderBy } from "lodash";

(async function makeGQLCall() {
  const gqlUrl = "https://graphqlzero.almansi.me/api";

  const client = new ApolloClient({
    uri: gqlUrl,
  });

  const json = await client.query({
    query: gql`
      {
        posts {
          data {
            id
            title
            body
          }
        }
      }
    `,
  });
  myFunction(json);
})();

function myFunction(json) {
  const posts = json.data.posts.data;
  const sortedPosts = orderBy(posts, [json.id], ["desc"]);

  for (let i = 0; i < sortedPosts.length; i++) {
    if (i === 10) {
      break;
    }

    const resultsListContainer = document.querySelector(".results-list");

    resultsListContainer.innerHTML += `
        <li>
        <h3>${sortedPosts[i].title}</h3>
        <p>Id: ${sortedPosts[i].id}</p>
        </li>
        `;
  }
}
