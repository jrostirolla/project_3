import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String! ,$email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`

export const NEW_BUILD = gql`
    mutation newBuild($temp: String!, $size: String!, $planted: Boolean!, $centrepiece: String, $fishAdditions: [ String ], $buildBy: ID!) {
        newBuild(temp: $temp, size: $size, planted: $planted, centrepiece: $centrepiece, fishAdditions: $fishAdditions, buildBy: $buildBy) {
            _id
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
            builtBy
        }
    }
`