import React from 'react'
import { withRouteData, Head } from 'react-static'
import { Link } from '@reach/router'

export default withRouteData(({ post }) => (
  <div>
    <Head>
      <title>{post.title}</title>
    </Head>
    <Link to="/blog/">{'<'} Back</Link>
    <br />
    <h3>{post.title}</h3>
  </div>
))
