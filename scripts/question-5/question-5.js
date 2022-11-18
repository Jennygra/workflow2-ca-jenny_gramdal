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
          }
        }
      }
    `,
  });
  myFunction(json);
})();

function myFunction(json) {
  const posts = json.data.posts.data;
  const postId = posts.map((s) => s.id);
  const sortedPosts = orderBy(posts, [postId], ["desc"]);

  for (let i = 0; i < sortedPosts.length; i++) {
    if (i === 9) {
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
