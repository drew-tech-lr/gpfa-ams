import React from 'react'

interface Props {
    params: {slug: string};
    searchParams: {sortOrder: string} // Query String
}

const namePage = async ({params, searchParams}: Props) => {
  const { slug} = await params;
  const { sortOrder} = await searchParams;
  return (
    <div>namePage <br />
        {/* {slug} */}
    </div>
  )
}

export default namePage