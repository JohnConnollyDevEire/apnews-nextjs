import fs from 'fs'
import fetch from 'cross-fetch'

fetch(`http://localhost/graphql/delivery/ap/v1`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    variables: {},
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
  }),
})
  .then((result) => result.json())
  .then((result) => {
    const possibleTypes = {}

    result.data.__schema.types.forEach((supertype) => {
      if (supertype.possibleTypes) {
        possibleTypes[supertype.name] = supertype.possibleTypes.map(
          (subtype) => subtype.name,
        )
      }
    })

    fs.writeFile(
      './lib/apollo/possible-types/possibleTypes.json',
      JSON.stringify(possibleTypes),
      (err) => {
        if (err) {
          console.error('Error writing possibleTypes.json', err)
        } else {
          console.log('Fragment types successfully extracted!')
        }
      },
    )
  })
