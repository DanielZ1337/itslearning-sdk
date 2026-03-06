[itslearning-sdk](../../modules.md) / [types](../index.md) / ItslearningRestApiEntitiesComment

# ItslearningRestApiEntitiesComment

```ts
type ItslearningRestApiEntitiesComment = object;
```

The class contains data model of user comment

## Properties

### AllowDeleteComment

```ts
AllowDeleteComment: boolean;
```

true if it's allowed to delete the comment.

***

### AllowEditComment

```ts
AllowEditComment: boolean;
```

true if it's allowed to edit the comment. Always true if current person is an author of the comment.

***

### Author

```ts
Author: ItslearningRestApiEntitiesPersonSimple;
```

The person who created the comment.

***

### CommentText

```ts
CommentText: string;
```

Text message.

***

### CreatedDateTime

```ts
CreatedDateTime: Date;
```

Date time in UTC when the comment was created.

***

### Id

```ts
Id: number;
```

Comment identifier.

***

### IsRead

```ts
IsRead: boolean;
```

true if the comment has been read by current person.
