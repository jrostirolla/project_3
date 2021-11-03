import { gql } from 'apollo/client';

export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            email
            prevBuilds {
                temp
                size
                planted
                centrepiece {
                    _id
                    name
                    compatible
                    temp
                    tips
                }
                fishAdditions {
                    _id
                    name
                    compatible
                    temp
                    tips
                }
            }
        }
    }
`

export const QUERY_FISH = gql`
    query fish {
        _id
        name
        primaryFish
        compatible {
            _id
            name
        }
        temp
        tips
    }
`