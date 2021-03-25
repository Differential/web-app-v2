import { ArrowCircleRight } from 'phosphor-react';
import { useRouter } from 'next/router';
import { Photo } from 'components';
import { NonFeaturedItem } from './Dropdowns.styles';
import { Box, CardGrid, Heading, theme } from 'ui-kit';
import { getIdSuffix } from 'utils';

export default function PageDropdown({
  featuredItems,
  nonFeaturedItems,
  baseRoute,
}) {
  const router = useRouter();

  const numColumns = Math.ceil(featuredItems.length / 2) + 1;

  return (
    <Box bg="bg" p="l">
      <CardGrid columns={numColumns} gridColumnGap="base">
        {numColumns > 1
          ? [...Array(numColumns - 1).keys()].map(i => {
              const items = featuredItems.slice(i * 2, i * 2 + 2);

              return (
                <Box key={i} display="flex" flexDirection="column">
                  {items.map((item, i) => (
                    <Box height="226px" mb="s" key={item.id}>
                      <Photo
                        height="226px"
                        src={item.coverImage?.sources[0]?.uri}
                        inner={
                          <Heading fontWeight="600" variant="h2" color="white">
                            {item.title}
                          </Heading>
                        }
                        overlay={{
                          color: theme.colors.almost_black,
                          opacity: '30%',
                        }}
                        onClick={() => router.push(`${baseRoute}/${getIdSuffix(item.id)}`)}
                      />
                    </Box>
                  ))}
                </Box>
              );
            })
          : null}
        <Box display="flex" flexDirection="column" width="100%">
          {nonFeaturedItems.map((item, i) => (
            <NonFeaturedItem
              key={i}
              onClick={() =>
                router.push(`${baseRoute}/${getIdSuffix(item.id.split)}`)
              }
            >
              <Heading
                fontSize="l"
                lineHeight="h2"
                fontWeight="500"
                color="white"
              >
                {item.title}
              </Heading>
              <ArrowCircleRight size="32" color="white" />
            </NonFeaturedItem>
          ))}
        </Box>
      </CardGrid>
    </Box>
  );
}
