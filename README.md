# WildExplorer's Companion (WE’sC)

<p align="center">
  <img src="https://avatars.githubusercontent.com/u/149871363?s=400&u=692281d20065e19dd8d1ebaa4f60512d48843b6a&v=4" />
</p>

Wilderness survival emergency application is a vital resource for outdoor enthusiasts exploring wild forests. It offers three core features: a comprehensive wilderness survival guide, a first aid module, and an innovative object recognition system for edible wild plants. The survival guide equips users with essential knowledge on shelter building, fire-making, water purification, and navigation, all accessible offline. The first aid module provides step-by-step instructions for treating wilderness-related injuries. Most notably, the object recognition feature uses image recognition technology to identify edible wild plants, enabling users to make informed foraging decisions. This application is an indispensable companion for those venturing into the wilderness, ensuring they have the tools and knowledge to survive and thrive in the wild.

## API Spec

- [Users API](#users-api)
  - [POST /v1/users/register](#post-v1usersregister)
  - [POST /v1/users/login](#post-v1userslogin)
  - [PATCH /v1/users/change-password/](#patch-v1userschange-password)
  - [PATCH /v1/users/delete](#delete-v1usersdelete)
- [Feature API](#feature-api)
  - [GET /survival-guide](#get-v1featuresurvival-guide)
  - [GET /first-aid](#get-v1featurefirst-aid)
  - [GET /edible-plant](#get-v1featureedible-plant)

## Users API

### POST /v1/users/register

**Request :**

- Header
  - Content-Type: application/json
    - Accept: application/json
- Body :

```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

**Response Success:**

- Body :

```json
{
	"message" : “success”
	"data" : {
		"id" : "integer",
		"email" : "string",
		"name" : "string"
	}
}
```

**Response Error**

- Body :

```json
{
  "message": "string"
}
```

##

### POST /v1/users/login

**Request:**

- Header
  - Content-Type: application/json
    - Accept: application/json
- Body :

```json
{
  "email": "string",
  "password": "string"
}
```

**Response Success:**

- Header :
  - X-Auth-Token : "secret api token/key"
- Body

```json
{
	"message" : “success”
	"data" : {
		"id" : "integer",
		"email" : "string",
		"name" : "string"
	}
}
```

**Response Error**

- Body

```json
{
	"message" : string
}
```

##

### PATCH /v1/users/change-password

**Request:**

- Header
  - Content-Type: application/json
    - Accept: application/json
  - X-Auth-Token : "secret api token/key"
- Body

```json
{
  "email": "string",
  "currentPassword": "string",
  "newPassword": "string"
}
```

**Response Success:**

- Body

```json
{
	"message" : “success”
	"data" : {
		"id" : "integer",
		"email" : "string",
		"name" : "string"
	}
}
```

**Response Error**

- Body

```json
{
  "message": "string"
}
```

##

### DELETE /v1/users/delete

**Request:**

- Header
  - Content-Type: application/json
    - Accept: application/json
  - X-Auth-Token : "secret api token/key"
- Body

```json
{
  "email": "string",
  "password": "string"
}
```

**Response Success:**

- Body

```json
{
	"message" : “success”
}
```

**Response Error**

- Body

```json
{
  "message": "string"
}
```

# Feature API

### GET /v1/feature/survival-guide

**Request:**

- Header
  - Content-Type: application/json
    - Accept: application/json
  - X-Auth-Token : "secret api token/key"

**Response Success:**

- Body

```json
{
	"message" : “success”
	"data" : {
		"id" : "integer",
		"name" : "string",
		"url_markdown" : "string"
	}
}
```

**Response Error**

- Body

```json
{
  "message": "string"
}
```

##

### GET /v1/feature/first-aid

**Request:**

- Header
  - Content-Type: application/json
    - Accept: application/json
  - X-Auth-Token : "secret api token/key"

**Response Success:**

- Body

```json
{
	"message" : “success”
	"data" : {
		"id" : "integer",
		"name" : "string",
		"url_markdown" : "string"
	}
}
```

**Response Error**

- Body

```json
{
  "message": "string"
}
```

##

### GET /v1/feature/edible-plant

**Request:**

- Header
  - Content-Type: application/json
    - Accept: application/json
  - X-Auth-Token : "secret api token/key"

**Response Success:**

- Body

```json
{
	"message" : “success”
	"data" : {
		"id" : "integer",
		"name" : "string",
		"description" : "string"
	}
}
```

**Response Error**

- Body

```json
{
  "message": "string"
}
```

##

### Note: The Feature API is not fixed yet and subject to change
