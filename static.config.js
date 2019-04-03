import axios from 'axios'

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    process.env.API_URL = process.env.API_URL || 'http://localhost:4999/snippet/grid'
    console.log('@@', process.env.API_URL)
    try {
      const { data: { data: posts } } = await axios({
        url: process.env.API_URL,
        method: 'post',
        headers: {
          'content-type': 'application/json; charset=utf-8',
          Authorization: "Basic ZHJlYW1jYXRjaGVyOkYwbmNoM3J0MA=="
        },
        data: {
          "start": 0,
          "limit": 50,
          "sort_column": "name",
          "sort_direction": "asc",
          "filter": [],
          "entity": "company",
          "entity_id": "a74b50a4-4940-44ea-ad27-05ee996718a8",
          "grid": true
        }
      })
      return [
        {
          path: '/blog',
          getData: () => ({
            posts,
          }),
          children: posts.map(post => ({
            path: `/post/${post.id}`,
            component: 'src/containers/Post',
            getData: () => ({
              post,
            }),
          })),
        },
      ]
    } catch(e) {
      console.log('e: ', e);
      return []
    }
  },
}
