import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:8080/v1/graphql',
  documents: ['src/feature/**/*.gql', 'src/components/pages/**/*.gql'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    'src/types.ts': {
      plugins: ['typescript'],
    },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'types.ts',
      },
      plugins: [
        { add: { content: '/* eslint-disable */' } },
        'typescript-react-apollo',
        'typescript-operations',
      ],
    },
  },
  hooks: {
    afterAllFileWrite: 'prettier --write',
  },
  config: {
    immutableTypes: true,
    enumsAsConst: true,
    scalars: {
      uuid: 'string',
    },
  },
}

export default config
