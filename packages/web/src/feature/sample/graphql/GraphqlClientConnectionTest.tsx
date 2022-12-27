import { FC } from 'react'

import { Typography } from '@mui/material'

import { TestFragment } from './test.generated'

export const GraphqlClientConnectionTest: FC<TestFragment> = ({ id, memo }) => {
  return (
    <>
      <Typography>{id}</Typography>
      <Typography>{memo}</Typography>
    </>
  )
}
