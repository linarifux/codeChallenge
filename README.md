# codeChallenge

# Backend task
The following API tasks are for demonstrating your understanding of HTTP, Node.js, and general API practices.

Task 1. GET - <code>host/api/actors</code> will return
```array
[{
    name: 'name',
    birthday: 'birthday',
    country: 'country'
 }]
```
Task 2. POST - <code>host/api/user/signup</code> will accept <code>username</code>, <code>password</code> and will return jwt token. username must be unique.

```array
{
    token: 'token'
}
```
Task 3. POST - <code>host/api/user/login</code> will accept <code>username</code>, <code>password</code> and will return jwt token.
```array
{
    token: 'token'
}
```

Task 4. Authenticated route. GET - <code>host/api/movies</code> will return

```array
[{
    title: 'title',
    year: 'year',
    rating: 'rating',
    actors: [{
      name: 'name',
      birthday: 'birthday',
      country: 'country'
    }]
 }]
 ```
Preferred libraries:

<ol>
<li>Express</li>
<li>Mongoose</li>
</ol>
