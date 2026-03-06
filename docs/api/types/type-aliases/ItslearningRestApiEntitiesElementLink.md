[itslearning-sdk](../../modules.md) / [types](../index.md) / ItslearningRestApiEntitiesElementLink

# ItslearningRestApiEntitiesElementLink

```ts
type ItslearningRestApiEntitiesElementLink = object;
```

Represents element link.

## Properties

### ContentUrl

```ts
ContentUrl: string;
```

Url to the location in itslearning opened without master page.

***

### ElementId

```ts
ElementId: number;
```

The ID of element.

***

### ElementType

```ts
ElementType: ItslearningRestApiEntitiesElementType;
```

Related element's type.

***

### Homework

```ts
Homework: boolean;
```

Marks the element as homework.

***

### IconUrl

```ts
IconUrl: string;
```

Url to the element's icon used by itslearning.

***

### LearningToolId

```ts
LearningToolId: number;
```

Identifier of learning tool (Assignment extension, test extension etc.). It's 0 for native itslearning elements. It is applicable only if ElementType is LearningToolElement.

***

### Title

```ts
Title: string;
```

The element's title.

***

### Url

```ts
Url: string;
```

Url to the element's page in itslearning.
