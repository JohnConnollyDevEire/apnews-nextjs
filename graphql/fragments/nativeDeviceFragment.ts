import gql from 'graphql-tag'

export const nativeDeviceFragment = gql`
  fragment nativeDeviceFragment on NativeDevice {
    deviceLabel
    deviceUUID
    id
    typeId
  }
`
