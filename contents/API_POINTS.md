# API POINTS



## Users


### Menampilkan data users
```
GET: /users

response:
[
{
    "id": "",
    "name": "",
    "motto": "",
    "desc": "",
    "ig_url": "",
    "github_url": "",
    "avatar_url": ""
},
{
  ...
}
]
```
### Menampilkan data user dengan ```id``` tertentu 
```
GET: /users/[id]

response:
{
    "id": "",
    "name": "",
    "motto": "",
    "desc": "",
    "ig_url": "",
    "github_url": "",
    "avatar_url": ""
}
```
### Menambahkan data user
```
POST: /users

data:
{
    "name": "",
    "motto": "",
    "desc": "",
    "ig_url": "",
    "github_url": "",
    "avatar_url": ""
}

response:
true    //if true
false   //if false
```
### Mengubah data user
```
PUT: /about

data:
{
    "id":"",
    "name": "",
    "motto": "",
    "desc": "",
    "ig_url": "",
    "github_url": "",
    "avatar_url": ""
}
response:
true    //if true
false   //if false
```
### Menghapus data user
```
DELETE: /users/[id]

response:
true    //if true
false   //if false
```
## ARTICLES
### Menampilkan articles
```
GET: /articles

response:
[
{
    "id": "",
    "title": "",
    "description": "",
    "author": "",
    "thumbnail_url": "",
    "content": ""
},
{
    ...
}
]
```
### Menampilkan article berdasarkan ```id```
```
GET: /articles/[id]

response:
{
    "id": "",
    "title": "",
    "description": "",
    "author": "",
    "thumbnail_url": "",
    "content": ""
}
```
### Menambahkan article
```
POST: /articles

data:
{
    "title": "",
    "description": "",
    "author": "",
    "thumbnail_url": "",
    "content": ""
}

response:
true    //if true
false   //if false
```
### Mengubah article
```
PUT: /articles

data:
{
    "id":"",
    "title": "",
    "description": "",
    "author": "",
    "thumbnail_url": "",
    "content": ""
}

response:
true    //if true
false   //if false
```
### Menghapus article
```
DELETE: /articles

response:
true    //if true
false   //if false
```

# DATABASE DESIGN
![Design Database](https://raw.githubusercontent.com/wenispr2703/tekweb2022/main/images/Desain%20DB.png)
