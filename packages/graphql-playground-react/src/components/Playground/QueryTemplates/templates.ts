import {
  allPropsMarker,
  descriptionMarker,
  formatQuery,
  // genericTemplates,
  getOneGetAllTemplates,
  IQueryTemplate,
} from './templateUtils'

const exampleDate = `"2018-01-31 23:59"`

export const queryTemplates: IQueryTemplate[] = [
  ...getOneGetAllTemplates('video', 'videos', 'videos'),
  {
    title: 'Featured videos',
    description: 'Get all featured videos.',
    query: `query {
      ${descriptionMarker}
      videos(where: { isFeatured_eq: true }) { ${allPropsMarker} }
    }`,
  }, {
    title: 'All recent videos',
    description: 'Get all videos after created or updated after the given date.',
    query: `query {
      ${descriptionMarker}
      videos(where: {
        createdAt_gt: ${exampleDate},
        updatedAt_gt: ${exampleDate},
      }) { ${allPropsMarker} }
    }`,
  },

  ...getOneGetAllTemplates('video category', 'video categories', 'videoCategories'),
  {
    title: `All videos in category`,
    description: `Get all videos associated with the given video category.`,
    query: `query {
      ${descriptionMarker}
      videos(where: { categoryId_eq: 1 }) { ${allPropsMarker} }
    }`,
  },
  ...getOneGetAllTemplates('channel', 'channels', 'channels'),
  ...getOneGetAllTemplates('channel category', 'channels categories', 'channelCategories'),

  {
    title: `Channel's videos`,
    description: `Get all videos associated with the given channel.`,
    query: `query {
      ${descriptionMarker}
      videos(where: { channelId_eq: 1 }) { ${allPropsMarker} }
    }`,
  },

  ...getOneGetAllTemplates('asset', 'assets', 'dataObjects'),
  ...getOneGetAllTemplates('membership', 'memberships', 'memberships'),

  ...getOneGetAllTemplates('curator group', 'curator groups', 'curatorGroups'),
  ...getOneGetAllTemplates('worker', 'workers', 'workers'),
].map(formatQuery)
