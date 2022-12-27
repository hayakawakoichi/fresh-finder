/* eslint-disable */
import * as Types from '../../../types'

import { gql } from '@apollo/client'
export const TestFragmentDoc = gql`
  fragment test on test {
    id
    memo
    created_at
    updated_at
  }
`
export type TestFragment = {
  readonly __typename?: 'test'
  readonly id: string
  readonly memo: string
  readonly created_at: any
  readonly updated_at: any
}
