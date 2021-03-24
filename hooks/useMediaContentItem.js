import { gql, useQuery } from '@apollo/client';

export const GET_MEDIA_CONTENT_ITEM = gql`
  query getMediaContentItem($itemId: ID!) {
    node(id: $itemId) {
      id
      ... on MediaContentItem {
        title
        coverImage {
          sources {
            uri
          }
        }
        videos {
          sources {
            uri
          }
        }
      }
    }
  }
`;

function useMediaContentItem(options = {}) {
  const query = useQuery(GET_MEDIA_CONTENT_ITEM, options);

  return {
    item: query?.data?.node,
    ...query,
  };
}

export default useMediaContentItem;