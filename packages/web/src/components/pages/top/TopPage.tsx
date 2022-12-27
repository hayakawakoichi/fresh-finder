import { NextPage } from 'next'

import { Typography } from '@mui/material'

import { useTestQueryQuery } from './TopPage.generated'

import { GraphqlClientConnectionTest } from '@/feature/sample/graphql'

export const TopPage: NextPage = () => {
  const { data } = useTestQueryQuery()
  return (
    <>
      <Typography>トップページ</Typography>
      {data?.test.map((test) => (
        <GraphqlClientConnectionTest key={test.id} {...test} />
      ))}
    </>
  )
}
