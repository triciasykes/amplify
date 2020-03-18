/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAnimal = /* GraphQL */ `
  query GetAnimal($id: ID!) {
    getAnimal(id: $id) {
      id
      name
      description
      location
    }
  }
`;
export const listAnimals = /* GraphQL */ `
  query ListAnimals(
    $filter: ModelAnimalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnimals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        location
      }
      nextToken
    }
  }
`;
