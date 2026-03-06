[itslearning-sdk](../../modules.md) / [types](../index.md) / ItslearningRestApiEntitiesElementType

# ItslearningRestApiEntitiesElementType

```ts
const ItslearningRestApiEntitiesElementType: object;
```

Represents the type of a learning element or content item in the system.
This enum defines the various types of elements that can exist in courses and other locations.

## Type Declaration

### Assignment

```ts
readonly Assignment: 256 = 256;
```

Assignment element.

### CustomActivity

```ts
readonly CustomActivity: 524288 = 524288;
```

Custom activity element.

### Discussion

```ts
readonly Discussion: 1 = 1;
```

Discussion element.

### Folder

```ts
readonly Folder: 4 = 4;
```

Folder container element.

### FolderFile

```ts
readonly FolderFile: 64 = 64;
```

File element (folder file).

### LearningPath

```ts
readonly LearningPath: 1048576 = 1048576;
```

Learning path element.

### LearningToolElement

```ts
readonly LearningToolElement: 131072 = 131072;
```

Learning tool element (any element that belongs to an extension or learning tool).

### Lesson

```ts
readonly Lesson: 2048 = 2048;
```

Lesson element.

### Note

```ts
readonly Note: 8 = 8;
```

Note element.

### PictureWithDescription

```ts
readonly PictureWithDescription: 2 = 2;
```

Picture with description element.

### Survey

```ts
readonly Survey: 128 = 128;
```

Survey element.

### Test

```ts
readonly Test: 65536 = 65536;
```

Test 2.0 element.

### Unknown

```ts
readonly Unknown: 0 = 0;
```

Element type is not defined or unknown.

### WebLink

```ts
readonly WebLink: 32 = 32;
```

Web link element.
