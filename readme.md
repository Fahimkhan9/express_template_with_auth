
# Express template with auth

A template to start developing express project with mongoose.

#### Routes
###### Health check

```http
  GET /api/v1/healtchcheck
```

###### Register user

```http
  POST /api/v1/users/register
```
###### Login user

```http
  POST /api/v1/users/login
```
#### Logout user

```http
  POST /api/v1/users/logout
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token`      | `string` | **Required**. required to authenticate |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI`
`JWT_SECRET`
`NODE_ENV`
`PORT`
`CORS_ORIGIN`




## Folder Structure



